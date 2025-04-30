import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { presentationStyles } from "../css/presentationStyles";

export const ExplanationPopup = ({ visible, popupData, onClose }) => {
  if (!visible || !popupData) return null;

  const [language, setLanguage] = useState("en");

  const {
    title,
    sections,
    arabic_title,
    arabic_sections,
  } = popupData;

  const hasArabic = arabic_title && arabic_sections;

  const displayedTitle = language === "en" ? title : arabic_title;
  const displayedSections = language === "en" ? sections : arabic_sections;

  return (
    <View style={presentationStyles.modalOverlay}>
      <View style={presentationStyles.alertBox}>
        {/* Close Button */}
        <TouchableOpacity
          onPress={onClose}
          style={presentationStyles.closeButton}
        >
          <Text style={presentationStyles.closeButtonText}>X</Text>
        </TouchableOpacity>

        {/* Title + Toggle */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            position: "relative",
          }}
        >
          <Text
            style={[
              presentationStyles.title,
              { textAlign: "center", flex: 1 },
            ]}
          >
            {displayedTitle}
          </Text>

          {hasArabic && (
            <TouchableOpacity
              onPress={() =>
                setLanguage((prev) => (prev === "en" ? "ar" : "en"))
              }
              style={{
                position: "absolute",
                right: 0,
                paddingHorizontal: 10,
                paddingVertical: 4,
              }}
            >
              <Text style={{ fontSize: 16, color: "#007aff" }}>
                {language === "en" ? "عربي" : "English"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={presentationStyles.content}
          onContentSizeChange={(width, height) => {
            console.log("Content Size:", { width, height });
          }}
        >
          {displayedSections?.map((section, index) => (
            <View key={index} style={presentationStyles.section}>
              <Text
                style={[
                  presentationStyles.sectionTitle,
                  language === "ar" && { textAlign: "right", writingDirection: "rtl" },
                ]}
              >
                {section.title}
              </Text>
              {section.text.map((paragraph, i) => (
                <View
                  key={i}
                  style={{
                    marginBottom: 15,
                    writingDirection: language === "ar" ? "rtl" : "ltr",
                  }}
                >
                  {parseFormattedText(paragraph, `${index}-${i}`, language)}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

// Helper function to parse and render formatted text
const parseFormattedText = (text, keyPrefix = "", language = "en") => {
  const regex =
    /\*\*\*(.*?)\*\*\*|\*\*(.*?)\*\*|"(.*?)"|^-(.*?)(?=\n|$)|^>>(.*?)(?=\n|$)/gm;

  let match;
  const elements = [];
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, boldItalic, bold, italic, bullet, doubleIndent] = match;

    if (lastIndex < match.index) {
      elements.push({
        type: "normal",
        text: text.slice(lastIndex, match.index),
      });
    }

    if (boldItalic) {
      elements.push({ type: "boldItalic", text: boldItalic });
    } else if (bold) {
      elements.push({ type: "bold", text: bold });
    } else if (italic) {
      elements.push({ type: "italic", text: `"${italic}"` });
    } else if (bullet) {
      elements.push({ type: "bullet", text: bullet.trim() });
    } else if (doubleIndent) {
      elements.push({ type: "doubleIndent", text: doubleIndent.trim() });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push({ type: "normal", text: text.slice(lastIndex) });
  }

  const isBullet = elements.some((part) => part.type === "bullet");
  const isDoubleIndent = elements.some((part) => part.type === "doubleIndent");

  if (isBullet) {
    return elements
      .filter((part) => part.type === "bullet")
      .map((part, idx) => (
        <Text
          key={`${keyPrefix}-bullet-${idx}`}
          style={{
            marginLeft: 20,
            lineHeight: 22,
            writingDirection: language === "ar" ? "rtl" : "ltr",
            textAlign: language === "ar" ? "right" : "left",
          }}
        >
          • {part.text}
        </Text>
      ));
  }

  if (isDoubleIndent) {
    return elements
      .filter((part) => part.type === "doubleIndent")
      .map((part, idx) => (
        <Text
          key={`${keyPrefix}-indent-${idx}`}
          style={{
            marginLeft: 40,
            lineHeight: 18,
            writingDirection: language === "ar" ? "rtl" : "ltr",
            textAlign: language === "ar" ? "right" : "left",
          }}
        >
          {part.text}
        </Text>
      ));
  }

  return (
    <Text
      style={{
        lineHeight: 22,
        writingDirection: language === "ar" ? "rtl" : "ltr",
        textAlign: language === "ar" ? "right" : "left",
      }}
    >
      {elements.map((part, idx) => {
        const key = `${keyPrefix}-${idx}`;
        if (part.type === "boldItalic") {
          return (
            <Text key={key} style={{ fontWeight: "bold", fontStyle: "italic" }}>
              {part.text}
            </Text>
          );
        }
        if (part.type === "bold") {
          return (
            <Text key={key} style={{ fontWeight: "bold" }}>
              {part.text}
            </Text>
          );
        }
        if (part.type === "italic") {
          return (
            <Text key={key} style={{ fontStyle: "italic" }}>
              {part.text}
            </Text>
          );
        }
        return <Text key={key}>{part.text}</Text>;
      })}
    </Text>
  );
};
