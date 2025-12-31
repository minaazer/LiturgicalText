import React, { useContext, useMemo, useState } from 'react';
import { Modal, Text, View, ScrollView, TouchableOpacity, TextInput, useWindowDimensions } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SaintSettingsScreen = () => {
    const [
        settings,
        ,
        ,
        ,
        ,
        ,
        ,
        setSaintSettingVisibility,
    ] = useContext(SettingsContext);
    const saintSettings = settings.saintSettings || [];
    const { width: windowWidth } = useWindowDimensions();

    const [sortByName, setSortByName] = useState(false); // State to track sorting order
    const [searchQuery, setSearchQuery] = useState(''); // State to track search input

    const [activeSaintName, setActiveSaintName] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation(); // Use the useNavigation hook to access navigation functions
    const handleBackPress = () => {
        navigation.goBack();
    };

    // Toggle Sorting Order
    const toggleSortOrder = () => {
        setSortByName(prev => !prev);
    };

    const saintSettingTypes = [
        { key: "doxology", label: "Doxology" },
        { key: "verseOfCymbals", label: "Verse of Cymbals" },
        { key: "intercession", label: "Intercession" },
        { key: "actsResponse", label: "Acts Response" },
        { key: "gospelResponse", label: "Gospel Response" },
        { key: "distributionPraise", label: "Distribution Praise" },
    ];

    const sortedSaintSettings = [...saintSettings].sort((a, b) => {
        if (sortByName) {
            return a.saintName.localeCompare(b.saintName);
        }
        return 0;
    });

    const filteredSaintSettings = sortedSaintSettings.filter(item =>
        item.saintName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const visibleSaintSettings = filteredSaintSettings.filter((saint) =>
        saintSettingTypes.some(
            (settingType) => typeof saint?.[settingType.key] === "boolean"
        )
    );

    const groupedSaintSettings = useMemo(() => {
        const typeOrder = [
            "Heavenly",
            "Apostle",
            "Martyr",
            "Female Martyr",
            "Patriarch",
            "Saint",
        ];
        const typeOrderMap = new Map(typeOrder.map((label, index) => [label, index]));
        const heavenlyOrder = [
            "Archangel Michael",
            "Archangel Gabriel",
            "Archangel Raphael",
            "Archangel Suriel",
            "The Four Incorporeal Creatures",
            "St. John The Baptist",
            "The Twenty Four Presbyters",
        ];
        const normalizeName = (value) => (value || "").toLowerCase();
        const heavenlyOrderMap = new Map(
            heavenlyOrder.map((name, index) => [normalizeName(name), index])
        );
        const groups = new Map();
        visibleSaintSettings.forEach((saint) => {
            const typeLabel = Array.isArray(saint.type)
                ? saint.type.find((type) => typeOrderMap.has(type))
                : null;
            if (!typeLabel) {
                return;
            }
            if (!groups.has(typeLabel)) {
                groups.set(typeLabel, []);
            }
            groups.get(typeLabel).push(saint);
        });

        return Array.from(groups.entries())
            .sort(
                ([a], [b]) =>
                    (typeOrderMap.get(a) ?? Number.MAX_SAFE_INTEGER) -
                    (typeOrderMap.get(b) ?? Number.MAX_SAFE_INTEGER)
            )
            .map(([typeLabel, saints]) => ({
                typeLabel,
                saints: saints.slice().sort((a, b) => {
                    if (typeLabel === "Heavenly") {
                        const aIndex = heavenlyOrderMap.get(normalizeName(a.saintName));
                        const bIndex = heavenlyOrderMap.get(normalizeName(b.saintName));
                        const aRank = aIndex ?? Number.MAX_SAFE_INTEGER;
                        const bRank = bIndex ?? Number.MAX_SAFE_INTEGER;
                        if (aRank !== bRank) {
                            return aRank - bRank;
                        }
                    }
                    return a.saintName.localeCompare(b.saintName);
                }),
            }));
    }, [visibleSaintSettings]);
    const minCardWidth = 280;
    const columnCount = Math.max(1, Math.floor(windowWidth / minCardWidth));
    const cardWidth = columnCount > 1 ? `${Math.floor(100 / columnCount)}%` : "100%";

    const activeSaint = useMemo(
        () => visibleSaintSettings.find((saint) => saint.saintName === activeSaintName),
        [activeSaintName, visibleSaintSettings]
    );

    const openSaintModal = (saintName) => {
        setActiveSaintName(saintName);
        setModalVisible(true);
    };

    const closeSaintModal = () => {
        setModalVisible(false);
        setActiveSaintName(null);
    };

    return (
        <View style={presentationStyles.settingsScreen}>
            <ScrollView contentContainerStyle={presentationStyles.settingsInnerContainer} style={presentationStyles.scrollView}>
                <View style={presentationStyles.titleContainer}>
                    <TouchableOpacity style={presentationStyles.backButton} onPress={handleBackPress}>
                        <Text style={presentationStyles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={presentationStyles.screenTitle}>Saint Settings</Text>
                </View>

                <View style={presentationStyles.searchSortContainer}>
                  <TextInput
                      style={presentationStyles.searchInput}
                      placeholder="Search Saints"
                      value={searchQuery}
                      onChangeText={text => setSearchQuery(text)}
                  />

                  {/* Sort Button */}
                  <TouchableOpacity style={presentationStyles.settingsSortButton} onPress={toggleSortOrder}>
                      <Text style={presentationStyles.buttonText}>
                          {sortByName ? 'Default Sort' : 'Alphabetical Sort'}
                      </Text>
                  </TouchableOpacity>
                </View>
                {groupedSaintSettings.map(({ typeLabel, saints }) => (
                    <View key={typeLabel} style={{ width: "100%" }}>
                        <Text
                            style={[
                                presentationStyles.settingTitle,
                                { textAlign: "center", fontSize: 22 },
                            ]}
                        >
                            {typeLabel}
                        </Text>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignItems: "stretch",
                            }}
                        >
                        {saints.map((saint) => {
                            const enabledLabels = saintSettingTypes
                                .filter(
                                    (settingType) =>
                                        typeof saint?.[settingType.key] === "boolean" &&
                                        saint[settingType.key] === true
                                )
                                .map((settingType) => settingType.label);

                            return (
                                <TouchableOpacity
                                    key={saint.saintName}
                                    style={{
                                        width: cardWidth,
                                        paddingHorizontal: 10,
                                        marginBottom: 10,
                                        alignSelf: "stretch",
                                    }}
                                    onPress={() => openSaintModal(saint.saintName)}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "#f7f2ea",
                                            borderRadius: 10,
                                            padding: 12,
                                            borderWidth: 1,
                                            borderColor: "#e0d5c5",
                                            flex: 1,
                                        }}
                                    >
                                        <Text style={presentationStyles.languageTitle}>
                                            {saint.saintName}
                                        </Text>
                                        {enabledLabels.length > 0 ? (
                                            <Text style={{ color: "#333", marginTop: 4 }}>
                                                {enabledLabels.join(", ")}
                                            </Text>
                                        ) : null}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Modal
                transparent
                visible={modalVisible}
                animationType="fade"
                onRequestClose={closeSaintModal}
            >
                <View style={presentationStyles.modalOverlay}>
                    <View style={presentationStyles.alertBox}>
                        <TouchableOpacity
                            style={presentationStyles.closeButton}
                            onPress={closeSaintModal}
                        >
                            <Text style={presentationStyles.closeButtonText}>×</Text>
                        </TouchableOpacity>
                        <Text style={presentationStyles.title}>
                            {activeSaint?.saintName || "Saint Settings"}
                        </Text>
                        <ScrollView style={presentationStyles.content}>
                            {activeSaint &&
                                saintSettingTypes.map((settingType) => {
                                    const settingValue = activeSaint[settingType.key];
                                    if (typeof settingValue !== "boolean") {
                                        return null;
                                    }

                                    return (
                                        <View
                                            key={`${activeSaint.saintName}-${settingType.key}`}
                                            style={presentationStyles.language}
                                        >
                                            <BouncyCheckbox
                                                isChecked={settingValue}
                                                onPress={(isChecked) =>
                                                    setSaintSettingVisibility(
                                                        activeSaint.saintName,
                                                        settingType.key,
                                                        isChecked
                                                    )
                                                }
                                                fillColor="#e19d09"
                                                unfillColor="#FFFFFF"
                                                iconStyle={{ borderColor: "black" }}
                                                textStyle={{
                                                    textDecorationLine: "none",
                                                    color: "black",
                                                    fontSize: 16,
                                                }}
                                                text={settingType.label}
                                            />
                                        </View>
                                    );
                                })}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SaintSettingsScreen;
