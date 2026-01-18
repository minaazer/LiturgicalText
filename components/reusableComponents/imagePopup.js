import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const ImagePopup = ({ visible, imageUri, onClose }) => {
  const [aspectRatio, setAspectRatio] = useState(3 / 4); // fallback ratio
  const { width: screenWidth } = useWindowDimensions();

  const scale = useSharedValue(1);

  useEffect(() => {
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
  }, [imageUri]);

  const pinchGesture = Gesture.Pinch().onUpdate((event) => {
    'worklet';
    scale.value = event.scale;
  });

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{ scale: scale.value }],
    };
  });

  if (!visible || !imageUri) return null;

  return (
    <GestureHandlerRootView style={styles.overlay}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        <GestureDetector gesture={pinchGesture}>
          <Animated.View style={[{ width: screenWidth }, animatedStyle]}>
            <Animated.Image
              source={{ uri: imageUri }}
              style={{
                width: screenWidth,
                height: screenWidth / aspectRatio,
              }}
              resizeMode="contain"
            />
          </Animated.View>
        </GestureDetector>
      </ScrollView>
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
    zIndex: 999999999
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 10
  },
});
