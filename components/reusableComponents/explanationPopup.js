import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export const ExplanationPopup = ({ visible, title, sections, onClose }) => {
  if (!visible) return null;


  return (
      <View style={styles.modalOverlay}>
        <View style={styles.alertBox}>
          {/* "X" Button in the top-left corner */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>{title}</Text>

          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={styles.content}
            onContentSizeChange={(width, height) => {
              console.log('Content Size:', { width, height });
            }}
          >
             {sections.map((section, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text>{parseFormattedText(section.text)}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
  );
};

// Helper function to parse and render formatted text
const parseFormattedText = (text) => {
  const regex = /\*\*\*(.*?)\*\*\*|\*\*(.*?)\*\*|"(.*?)"|^-(.*?)(?=\n|$)|^>>(.*?)(?=\n|$)/gm;

  const parts = text.split('\n').map((line) => {
    let match;
    const elements = [];
    let lastIndex = 0;

    while ((match = regex.exec(line)) !== null) {
      const [fullMatch, boldItalic, bold, italic, bullet, doubleIndent] = match;

      // Add normal text before the match
      if (lastIndex < match.index) {
        elements.push({ type: 'normal', text: line.slice(lastIndex, match.index) });
      }

      if (boldItalic) {
        elements.push({ type: 'boldItalic', text: boldItalic });
      } else if (bold) {
        elements.push({ type: 'bold', text: bold });
      } else if (italic) {
        elements.push({ type: 'italic', text: `"${italic}"` });
      } else if (bullet) {
        elements.push({ type: 'bullet', text: bullet.trim() });
      } else if (doubleIndent) {
        elements.push({ type: 'doubleIndent', text: doubleIndent.trim() });
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining normal text after the last match
    if (lastIndex < line.length) {
      elements.push({ type: 'normal', text: line.slice(lastIndex) });
    }

    return elements;
  });

  return parts.map((lineParts, lineIndex) => {
    // Check if this line contains a bullet or double-indented line
    const isBullet = lineParts.some((part) => part.type === 'bullet');
    const isDoubleIndent = lineParts.some((part) => part.type === 'doubleIndent');

    if (isBullet) {
      return lineParts
        .filter((part) => part.type === 'bullet')
        .map((part, index) => (
          <Text
            key={`${lineIndex}-${index}`}
            style={{
              marginLeft: 20, // Single indentation for bullets
              lineHeight: 22,
            }}
          >
            • {part.text}
          </Text>
        ));
    } else if (isDoubleIndent) {
      return lineParts
        .filter((part) => part.type === 'doubleIndent')
        .map((part, index) => (
          <Text
            key={`${lineIndex}-${index}`}
            style={{
              marginLeft: 40, // Double indentation for this type
              lineHeight: 18, // Single-line spacing
            }}
          >
            {part.text}
          </Text>
        ));
    } else {
      // Regular paragraphs
      return (
        <Text key={lineIndex} style={{ marginBottom: 15, lineHeight: 22 }}>
          {lineParts.map((part, index) => {
            if (part.type === 'boldItalic') {
              return (
                <Text key={index} style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  {part.text}
                </Text>
              );
            } else if (part.type === 'bold') {
              return (
                <Text key={index} style={{ fontWeight: 'bold' }}>
                  {part.text}
                </Text>
              );
            } else if (part.type === 'italic') {
              return (
                <Text key={index} style={{ fontStyle: 'italic' }}>
                  {part.text}
                </Text>
              );
            } else {
              return <Text key={index}>{part.text}</Text>;
            }
          })}
        </Text>
      );
    }
  });
};






const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    },
  alertBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: '#ddd',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    paddingBottom: 20,
    marginTop: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
