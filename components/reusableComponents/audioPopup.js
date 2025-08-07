import { Audio } from 'expo-av';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Feather";





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
    // If same audio is loaded
    if (popupSound && currentAudioTitle === title) {
      if (isPaused) {
        await popupSound.playAsync();
        isPaused = false;
        updateState(false);
      } else {
        await popupSound.pauseAsync();
        isPaused = true;
        updateState(true);
      }
      return;
    }

    // If a different audio is loaded
    if (popupSound) {
      await popupSound.unloadAsync();
      popupSound = null;
    }

    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUrl },
      { shouldPlay: true, isLooping: true }
    );

    popupSound = sound;
    currentAudioTitle = title;
    isPaused = false;

    await popupSound.playAsync();
    updateState(false);
  } catch (error) {
    console.error("Audio toggle error:", error.message);
  }
};

export const stopPopupAudio = async () => {
  try {
    if (popupSound) {
      await popupSound.stopAsync();
      await popupSound.unloadAsync();
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
            <Text style={styles.barText}>
            AUDIO
            </Text>
        
        </View>

    </TouchableOpacity>
  );
}

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={onPlayPause} style={styles.button}>
        <Text style={styles.text}>
            <Icon name={isPaused ? 'play-circle' : 'pause-circle'} style={styles.button}/>
        </Text>
      </TouchableOpacity>
      <Text style={styles.label} numberOfLines={1}>
        {title}
      </Text>
      <TouchableOpacity onPress={onStop} style={styles.closeButton}>
        <Text style={styles.text}><Icon name="x-square" style={styles.dropdownButtonArrowStyle}/></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onMinimize} style={styles.minimizeButton}>
        <Text style={styles.text}><Icon name="chevrons-down" style={styles.dropdownButtonArrowStyle}/></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  position: 'absolute',
  bottom: 0,                     // spacing from bottom
  left: '50%',                   // start at center of screen
  width: 200,                    // fixed width
  transform: [{ translateX: -100 }], // half of 200 to center it
  backgroundColor: '#ffffff77',
  borderRadius: 8,
  padding: 5,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
},

minimizedBar: {
  position: 'absolute',
  bottom: 0,               // Add margin from bottom edge
  left: '50%',              // Start from center of screen
  transform: [{ translateX: -40 }], // Shift left by half of width (80 / 2)
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
  },
  button: {
    marginHorizontal: 0,
    padding: 2,
    fontSize: 30,
    color: '#000000ff',
  },
  minimizeButton: {
    marginHorizontal: 0,
    padding: 2,
    marginTop: 0,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  closeButton: {
    marginHorizontal: 0,
    padding: 3,
    marginTop: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  text: {
    fontSize: 18,
    color: '#ffffffff',
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
    color: "#151E26",
  },

});

export default AudioControlsPopup;
