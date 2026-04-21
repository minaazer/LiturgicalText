import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { presentationStyles } from "../css/presentationStyles";

const popupColors = {
  navy: "#003060",
  navySoft: "rgba(0, 48, 96, 0.08)",
  navyBorder: "rgba(0, 48, 96, 0.18)",
  gold: "#D8D48A",
  text: "#102A43",
  muted: "#5F7184",
};

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
            style={styles.controls}
          >
            {hasArabic && (
              <TouchableOpacity
                onPress={() =>
                  setLanguage((prev) => (prev === "en" ? "ar" : "en"))
                }
                style={styles.languageButton}
              >
                <Text style={styles.languageButtonText}>
                  {language === "en" ? "عربي" : "English"}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() =>
                setFontScale((prev) => Math.max(0.8, +(prev - 0.1).toFixed(2)))
              }
              disabled={!canDecreaseFont}
              style={[
                styles.iconButton,
                !canDecreaseFont && styles.iconButtonDisabled,
              ]}
            >
              <Feather name="minus" size={18} color={popupColors.navy} />
            </TouchableOpacity>

            <View style={styles.typeIndicator}>
              <Feather name="type" size={16} color={popupColors.gold} />
            </View>

            <TouchableOpacity
              onPress={() =>
                setFontScale((prev) => Math.min(3, +(prev + 0.1).toFixed(2)))
              }
              disabled={!canIncreaseFont}
              style={[
                styles.iconButton,
                !canIncreaseFont && styles.iconButtonDisabled,
              ]}
            >
              <Feather name="plus" size={18} color={popupColors.navy} />
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

const styles = StyleSheet.create({
  controls: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  languageButton: {
    minWidth: 66,
    minHeight: 32,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: popupColors.navy,
    borderWidth: 1,
    borderColor: popupColors.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  languageButtonText: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: popupColors.navySoft,
    borderWidth: 1,
    borderColor: popupColors.navyBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonDisabled: {
    opacity: 0.4,
  },
  typeIndicator: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: popupColors.text,
    borderWidth: 1,
    borderColor: popupColors.text,
    alignItems: "center",
    justifyContent: "center",
  },
});

const parseFormattedText = (text, keyPrefix = "", language = "en", fontScale = 1) => {
  const regex =
    /\*\*\*(.*?)\*\*\*|\*\*(.*?)\*\*|"(.*?)"|^-(.*?)(?=\n|$)|^>>(.*?)(?=\n|$)/gm;

  let match;
  const elements = [];
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const [, boldItalic, bold, italic, bullet, doubleIndent] = match;

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
