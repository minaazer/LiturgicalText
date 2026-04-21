import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import Animated, {
  runOnJS,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export const ImagePopup = ({ visible, imageUri, onClose }) => {
  const [aspectRatio, setAspectRatio] = useState(3 / 4); // fallback ratio
  const [controlsVisible, setControlsVisible] = useState(true);
  const [fitMode, setFitMode] = useState("height");
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const controlsTimer = useRef(null);

  const scale = useSharedValue(1);
  const pinchStartScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panStartX = useSharedValue(0);
  const panStartY = useSharedValue(0);
  const zoomBarWidth = Math.min(screenWidth * 0.34, 170);
  const availableHeight = Math.max(
    1,
    screenHeight - insets.top - insets.bottom - 56
  );
  const containedImageWidth = Math.min(
    screenWidth,
    availableHeight * aspectRatio
  );
  const containedImageHeight = containedImageWidth / aspectRatio;

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimer.current) {
      clearTimeout(controlsTimer.current);
    }
    controlsTimer.current = setTimeout(() => {
      setControlsVisible(false);
    }, 1800);
  }, []);

  useEffect(() => {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    setFitMode("height");
    setControlsVisible(true);
    if (visible) {
      showControls();
    }
    if (imageUri) {
      Image.getSize(
        imageUri,
        (width, height) => {
          if (width > 0 && height > 0) {
            setAspectRatio(width / height);
          }
        },
        (err) => {
          console.warn("Failed to get image size:", err);
          setAspectRatio(3 / 4);
        }
      );
    }
    return () => {
      if (controlsTimer.current) {
        clearTimeout(controlsTimer.current);
      }
    };
  }, [imageUri, scale, showControls, translateX, translateY, visible]);

  const pinchGesture = Gesture.Pinch()
    .onBegin(() => {
      "worklet";
      runOnJS(showControls)();
      pinchStartScale.value = scale.value;
    })
    .onUpdate((event) => {
      "worklet";
      const nextScale = pinchStartScale.value * event.scale;
      scale.value = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextScale));
    })
    .onEnd(() => {
      "worklet";
      if (scale.value < 1.03) {
        scale.value = withTiming(1, { duration: 140 });
        translateX.value = withTiming(0, { duration: 140 });
        translateY.value = withTiming(0, { duration: 140 });
      }
    });

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      "worklet";
      runOnJS(showControls)();
      scale.value = withTiming(1, { duration: 180 });
      translateX.value = withTiming(0, { duration: 180 });
      translateY.value = withTiming(0, { duration: 180 });
    });

  const panGesture = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
      "worklet";
      runOnJS(showControls)();
      panStartX.value = translateX.value;
      panStartY.value = translateY.value;
    })
    .onUpdate((event) => {
      "worklet";
      if (scale.value <= 1.01) {
        translateX.value = 0;
        translateY.value = 0;
        return;
      }

      const maxX = Math.max(
        0,
        (containedImageWidth * scale.value - screenWidth) / 2
      );
      const maxY = Math.max(
        0,
        (containedImageHeight * scale.value - availableHeight) / 2
      );
      const nextX = panStartX.value + event.translationX;
      const nextY = panStartY.value + event.translationY;
      translateX.value = Math.min(maxX, Math.max(-maxX, nextX));
      translateY.value = Math.min(maxY, Math.max(-maxY, nextY));
    });

  const singleTapGesture = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(() => {
      "worklet";
      runOnJS(showControls)();
    });

  const imageGesture = Gesture.Simultaneous(
    pinchGesture,
    panGesture,
    Gesture.Exclusive(doubleTapGesture, singleTapGesture)
  );

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const zoomFillStyle = useAnimatedStyle(() => {
    "worklet";
    const progress = (scale.value - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM);
    return {
      width: zoomBarWidth * Math.min(1, Math.max(0, progress)),
    };
  });

  if (!visible || !imageUri) return null;

  const widthZoom = Math.min(
    MAX_ZOOM,
    Math.max(MIN_ZOOM, screenWidth / Math.max(1, containedImageWidth))
  );
  const heightZoom = Math.min(
    MAX_ZOOM,
    Math.max(MIN_ZOOM, availableHeight / Math.max(1, containedImageHeight))
  );
  const nextFitMode = fitMode === "width" ? "height" : "width";
  const fitIcon = nextFitMode === "width" ? "maximize-2" : "minimize-2";

  return (
    <GestureHandlerRootView style={styles.overlay}>
      {controlsVisible ? (
        <>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={`Fit image to screen ${nextFitMode}`}
            style={[
              styles.fitButton,
              {
                top: insets.top + 12,
                left: Math.max(insets.left, 12),
              },
            ]}
            onPress={() => {
              const nextScale = nextFitMode === "width" ? widthZoom : heightZoom;
              setFitMode(nextFitMode);
              showControls();
              scale.value = withTiming(nextScale, { duration: 180 });
              translateX.value = withTiming(0, { duration: 180 });
              translateY.value = withTiming(0, { duration: 180 });
            }}
          >
            <Feather name={fitIcon} size={21} color="#D8D48A" />
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Close image"
            style={[
              styles.closeButton,
              {
                top: insets.top + 12,
                right: Math.max(insets.right, 12),
              },
            ]}
            onPress={onClose}
          >
            <Feather name="x" size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <View
            style={[
              styles.zoomBar,
              {
                top: insets.top + 22,
                width: zoomBarWidth,
              },
            ]}
          >
            <Animated.View style={[styles.zoomBarFill, zoomFillStyle]} />
          </View>
        </>
      ) : null}

      <View
        style={[
          styles.imageStage,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            minHeight: availableHeight,
          },
        ]}
      >
        <GestureDetector gesture={imageGesture}>
          <Animated.View style={[styles.imageFrame, animatedStyle]}>
            <Animated.Image
              source={{ uri: imageUri }}
              style={{
                width: containedImageWidth,
                height: containedImageHeight,
              }}
              resizeMode="contain"
            />
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    zIndex: 999999999,
  },
  closeButton: {
    position: "absolute",
    zIndex: 12,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(18, 24, 31, 0.78)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
  fitButton: {
    position: "absolute",
    zIndex: 12,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(18, 24, 31, 0.78)",
    borderWidth: 1,
    borderColor: "rgba(216, 212, 138, 0.28)",
  },
  zoomBar: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 11,
    height: 4,
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    overflow: "hidden",
  },
  zoomBarFill: {
    height: "100%",
    borderRadius: 2,
    backgroundColor: "#D8D48A",
  },
  imageStage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageFrame: {
    alignItems: "center",
    justifyContent: "center",
  },
});
