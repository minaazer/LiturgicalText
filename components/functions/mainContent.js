import React, { useState } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import { WebView } from 'react-native-webview';
import { handleMessage, handleNext, handlePrevious } from './renderFunctions';
import { useNavigation } from '@react-navigation/native';

export const MainContent = ({ html, webviewRef, setDrawerItems, setCurrentTable }) => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageOffsets, setPageOffsets] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const screenWidth = Dimensions.get('window').width;
    let initialTouchX = null;

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

    return (
        <View
            style={presentationStyles.container}
            activeOpacity={1}
            onTouchStart={(event) => (initialTouchX = event.nativeEvent.pageX)}
            onTouchEnd={handleTouchEnd}
        >
            {loading && (
                <View style={presentationStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#3498db" />
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
                onMessage={(event) =>
                    handleMessage(
                        event,
                        setDrawerItems,
                        pageOffsets,
                        setPageOffsets,
                        setCurrentPage,
                        setCurrentTable,
                        webviewRef,
                        navigation
                    )
                }
                style={presentationStyles.webview}
                userSelect="none"
                pointerEvents="auto"
            />
        </View>
    );
};

