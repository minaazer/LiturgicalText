import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");

export const ImagePopup = ({ visible, imageUri, onClose }) => {
  const scale = useSharedValue(1);
  const [aspectRatio, setAspectRatio] = useState(4 / 3); // default
  const [imageSize, setImageSize] = useState({
    width: screenWidth,
    height: screenWidth * (4 / 3),
  });

  useEffect(() => {
    if (imageUri) {
      Image.getSize(
        imageUri,
        (width, height) => {
          if (width && height) {
            const ratio = height / width;
            setAspectRatio(ratio);
            setImageSize({
              width: screenWidth,
              height: screenWidth * ratio,
            });
          }
        },
        (err) => console.error("Image size error", err)
      );
    }
  }, [imageUri]);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      // keep scale
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <GestureHandlerRootView style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
        >
          <PinchGestureHandler onGestureEvent={pinchHandler}>
            <Animated.View
              style={[
                {
                  width: imageSize.width,
                  height: imageSize.height,
                },
                animatedStyle,
              ]}
            >
              <Animated.Image
                source={{ uri: imageUri }}
                style={styles.image}
                resizeMode="contain"
              />
            </Animated.View>
          </PinchGestureHandler>
        </ScrollView>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
