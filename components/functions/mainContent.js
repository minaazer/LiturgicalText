import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import { WebView } from 'react-native-webview';
import { handleMessage, handleNext, handlePrevious, handleDrawerItemPress } from './renderFunctions'; // Assuming this is imported
import { useNavigation, useIsFocused , useRoute } from '@react-navigation/native';
import localStorage from './localStorage';


export const MainContent = ({ html, webviewRef, setDrawerItems, setCurrentTable, currentTable }) => {
    const navigation = useNavigation();
    const parentRouteName = navigation.getParent()?.getState().routes || 'default_parent'; // Get parent route name
    const fileKey = parentRouteName[parentRouteName.length - 1].name; // Get the last route in the stack
    const [currentPage, setCurrentPage] = useState(0);
    const [pageOffsets, setPageOffsets] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [hasLeftScreen, setHasLeftScreen] = useState(false); // Track if the user has left the screen
    const [savedStates, setSavedStates] = useState({}); // Use state to store loaded states


    const screenWidth = Dimensions.get('window').width;
    let initialTouchX = null;

    const isFocused = useIsFocused();
    const wasPreviouslyFocused = useRef(false); // Keep track of previous focus state

    const handleTouchEnd = (event) => {
        const touchX = event.nativeEvent.pageX;
        const difference = Math.abs(touchX - initialTouchX);

        if (difference < 30) { // Adjust this threshold as necessary
            if (touchX < screenWidth / 2) {
                handlePrevious(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            } else if (touchX >= screenWidth / 2) {
                handleNext(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            }
        }
        initialTouchX = null;
    };

    useEffect(() => {
        if (isFocused) {
            if (hasLeftScreen && currentTable) {
                // Use handleDrawerItemPress to navigate to the currentTable
                handleDrawerItemPress(currentTable, webviewRef); 
                setHasLeftScreen(false); // Reset the flag
            }
        } else {
            // When the screen is unfocused, mark that the user has left the screen
            setHasLeftScreen(true);
        }

        wasPreviouslyFocused.current = isFocused;
    }, [isFocused, currentTable, hasLeftScreen]);


    // Load saved table states (visible or collapsed) from local storage
    useEffect(() => {
        const fetchStates = async () => {
            const states = await localStorage.getItem('tableStates');
            setSavedStates(states || {}); // Set state, fallback to empty object if null
        };

        fetchStates(); // Load saved states on mount
    }, []);

    const currentFileStates = savedStates[fileKey] || {};

    const injectedJavaScript = `
        fileKey = '${fileKey}';
        currentFileStates = ${JSON.stringify(currentFileStates)};
        savedStates = ${JSON.stringify(savedStates)};
        listenToTableCaptions(); // Initialize table logic
    `;
    



    
    return (
        <View
            style={presentationStyles.container}
            activeOpacity={1}
            onTouchStart={(event) => (initialTouchX = event.nativeEvent.pageX)}
            onTouchEnd={handleTouchEnd}
        >
            {loading && (
                <View style={presentationStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#003060" />
                </View>
            )}

            <WebView
                ref={webviewRef}
                source={{ html: html }}
                originWhitelist={['*']}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false} // Disable default WebView loader
                onLoadEnd={() => setLoading(false)} // Stop loading spinner when page has loaded
                injectedJavaScript={injectedJavaScript} // Inject JavaScript
                onMessage={(event) =>
                    handleMessage(
                        event,
                        setDrawerItems,
                        pageOffsets,
                        setPageOffsets,
                        setCurrentPage,
                        setCurrentTable,
                        webviewRef,
                        navigation,
                        localStorage
                    )
                }
                style={presentationStyles.webview}
                userSelect="none"
                pointerEvents="auto"
            />
        </View>
    );
};
