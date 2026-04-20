import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { presentationStyles } from "../css/presentationStyles";

export const ExplanationPopup = ({ visible, popupData, onClose }) => {
  const [language, setLanguage] = useState("en");
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    if (visible) {
      setFontScale(1);
    }
  }, [visible, popupData]);

  if (!visible || !popupData) return null;

  const {
    title,
    sections,
    arabic_title,
    arabic_sections,
  } = popupData;

  const hasArabic = arabic_title && arabic_sections;
  const displayedTitle = language === "en" ? title : arabic_title;
  const displayedSections = language === "en" ? sections : arabic_sections;
  const canDecreaseFont = fontScale > 0.8;
  const canIncreaseFont = fontScale < 3;

  return (
    <View style={presentationStyles.modalOverlay}>
      <View style={presentationStyles.alertBox}>
        <TouchableOpacity
          onPress={onClose}
          style={presentationStyles.closeButton}
        >
          <Text style={presentationStyles.closeButtonText}>X</Text>
        </TouchableOpacity>

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

          <View
            style={{
              position: "absolute",
              right: 0,
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            {hasArabic && (
              <TouchableOpacity
                onPress={() =>
                  setLanguage((prev) => (prev === "en" ? "ar" : "en"))
                }
                style={{
                  minWidth: 72,
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: "rgba(0, 122, 255, 0.12)",
                  borderWidth: 1,
                  borderColor: "rgba(0, 122, 255, 0.28)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 14, color: "#007aff", fontWeight: "600" }}>
                  {language === "en" ? "العربية" : "English"}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() =>
                setFontScale((prev) => Math.max(0.8, +(prev - 0.1).toFixed(2)))
              }
              disabled={!canDecreaseFont}
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "rgba(0, 122, 255, 0.12)",
                borderWidth: 1,
                borderColor: "rgba(0, 122, 255, 0.28)",
                alignItems: "center",
                justifyContent: "center",
                opacity: canDecreaseFont ? 1 : 0.45,
              }}
            >
              <Feather name="minus" size={18} color="#007aff" />
            </TouchableOpacity>

            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "rgba(0, 122, 255, 0.08)",
                borderWidth: 1,
                borderColor: "rgba(0, 122, 255, 0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="type" size={16} color="#007aff" />
            </View>

            <TouchableOpacity
              onPress={() =>
                setFontScale((prev) => Math.min(3, +(prev + 0.1).toFixed(2)))
              }
              disabled={!canIncreaseFont}
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "rgba(0, 122, 255, 0.12)",
                borderWidth: 1,
                borderColor: "rgba(0, 122, 255, 0.28)",
                alignItems: "center",
                justifyContent: "center",
                opacity: canIncreaseFont ? 1 : 0.45,
              }}
            >
              <Feather name="plus" size={18} color="#007aff" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={presentationStyles.content}>
          {displayedSections?.map((section, index) => (
            <View key={index} style={presentationStyles.section}>
              <Text
                style={[
                  presentationStyles.sectionTitle,
                  { fontSize: 18 * fontScale, lineHeight: 24 * fontScale },
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
                  {parseFormattedText(paragraph, `${index}-${i}`, language, fontScale)}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const parseFormattedText = (text, keyPrefix = "", language = "en", fontScale = 1) => {
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
            fontSize: 16 * fontScale,
            lineHeight: 22 * fontScale,
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
            fontSize: 15 * fontScale,
            lineHeight: 20 * fontScale,
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
        fontSize: 16 * fontScale,
        lineHeight: 22 * fontScale,
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
