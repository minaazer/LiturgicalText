import * as Audio from 'expo-audio';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let popupSound = null;
let currentAudioTitle = null;
let isPaused = false;

export const togglePopupAudio = async (title, updateState) => {
  try {
    const fileName = title
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '_')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '');

    const audioUrl = `https://eliaazer.com/wp-content/uploads/audio/${fileName}.mp3`;
    console.log("Audio URL:", audioUrl);

    // Configure audio mode for background playback
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false, // Disable recording
      staysActiveInBackground: true, // Enable background audio
      playsInSilentModeIOS: true, // Play audio when iPhone is in silent mode
      shouldDuckAndroid: false, // Do not lower volume for other audio
      playThroughEarpieceAndroid: false, // Use speaker/headphones, not earpiece
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX, // Do not mix with other audio on iOS
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, // Do not mix with other audio on Android
    });

    // If same audio is loaded
    if (popupSound && currentAudioTitle === title) {
      if (isPaused) {
        await popupSound.play();
        isPaused = false;
        updateState(false);
      } else {
        await popupSound.pause();
        isPaused = true;
        updateState(true);
      }
      return;
    }

    // If a different audio is loaded
    if (popupSound) {
      await popupSound.pause(); // Pause current audio
      await popupSound.remove(); // Release resources
      popupSound = null;
    }

    // Create and load new audio player
    popupSound = await Audio.createAudioPlayer({ uri: audioUrl });

    // Set looping and handle playback status
    popupSound.loop = true;
    popupSound.onPlaybackStatusUpdate = (status) => {
      if (status.didJustFinish && !status.isLooping) {
        isPaused = true;
        updateState(true);
      }
    };

    currentAudioTitle = title;
    isPaused = false;
    await popupSound.play();
    updateState(false);
  } catch (error) {
    console.error("Audio toggle error:", error.message);
  }
};

export const stopPopupAudio = async () => {
  try {
    if (popupSound) {
      await popupSound.pause(); // Pause audio
      await popupSound.remove(); // Release resources
      popupSound = null;
      currentAudioTitle = null;
      isPaused = false;
    }
  } catch (error) {
    console.error("Failed to stop audio:", error.message);
  }
};

const AudioControlsPopup = ({
  visible,
  minimized,
  isPaused,
  onPlayPause,
  onStop,
  title,
  onExpand,
  onMinimize,
}) => {
  if (!visible) return null;

  if (minimized) {
    return (
      <TouchableOpacity
        style={styles.minimizedBar}
        onPress={onExpand}
        activeOpacity={0.8}
      >
        <View style={styles.barIndicator}>
          <Text style={styles.barText}>AUDIO</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { width: 250, padding: 8 }]}>
      <TouchableOpacity onPress={onPlayPause} style={styles.button}>
        <Icon name={isPaused ? 'play-circle' : 'pause-circle'} size={30} color="#000000ff" />
      </TouchableOpacity>
      <Text style={[styles.label, { fontSize: 16, maxWidth: 180 }]} numberOfLines={2}>
        {title}
      </Text>
      <TouchableOpacity onPress={onStop} style={styles.closeButton}>
        <Icon name="x-square" size={20} color="#151E26" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onMinimize} style={styles.minimizeButton}>
        <Icon name="chevrons-down" size={20} color="#151E26" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -125 }], // Adjusted for wider container
    backgroundColor: '#ffffff77',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  minimizedBar: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -40 }],
    width: 80,
    height: 20,
    backgroundColor: 'rgba(242, 231, 231, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  barIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  barText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 16,
    fontWeight: 'bold',
  },
  label: {
    marginHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 12,
    maxWidth: 100,
    textAlign: 'center',
    color: '#000000ff',
  },
  button: {
    marginHorizontal: 0,
    padding: 2,
  },
  minimizeButton: {
    marginHorizontal: 0,
    padding: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  closeButton: {
    marginHorizontal: 0,
    padding: 3,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default AudioControlsPopup;