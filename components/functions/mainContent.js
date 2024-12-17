import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, Dimensions, Platform } from 'react-native';
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
    const [reload, setReload] = useState(1); // Use state to force reload
    const [firstTable, setFirstTable] = useState(''); // Use state to track first table
    const [refreshing, setRefreshing] = useState(false); // Use state to track refreshing state

    const screenWidth = Dimensions.get('window').width;

    const isFocused = useIsFocused();

    const handleTouchEnd = (touchX) => {
            if (touchX < screenWidth / 2) {
                handlePrevious(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            } else if (touchX >= screenWidth / 2) {
                handleNext(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            }
    };


useEffect(() => {
    let timeout; // Declare a timeout variable for clean-up

    if (isFocused) {
        if (hasLeftScreen && currentTable) {
            setRefreshing(true); // Set refreshing state
            timeout = setTimeout(() => {
                handleDrawerItemPress(currentTable, webviewRef);
                setHasLeftScreen(false); // Reset the flag
                setRefreshing(false); // Reset refreshing state
            }, 500);

        } else {
            if (currentTable) {
                handleDrawerItemPress(currentTable, webviewRef);
            } else {
                setRefreshing(true); // Set refreshing state
                if (!loading) {
                    timeout = setTimeout(() => {
                        webviewRef.current.injectJavaScript(`paginateTables();`);
                        handleDrawerItemPress(firstTable, webviewRef);
                        setRefreshing(false); // Reset refreshing state
                    }, 500);
                }
            }
        }
    } else {
        setCurrentTable(currentTable);
        setHasLeftScreen(true);
    }

    // Clean up the timeout
    return () => {
        if (timeout) clearTimeout(timeout);
    };

}, [isFocused, hasLeftScreen, loading]);

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

        initialize();
        
        listenToTableCaptions(); // Initialize table logic
        
    `;


    useEffect(() => {
        if (reload < 3) {
            setReload(reload + 1);
            
        }
    }
    , [reload, currentFileStates]);
    
    return (
        <View style={{flex:1}}>
          {refreshing && (
            <ActivityIndicator
                size="large"
                color="#003060"
                style={presentationStyles.loadingContainer}
                zIndex={1}
            />
        )}  
           
        {loading && (
            <ActivityIndicator
                size="large"
                color="#003060"
                style={presentationStyles.loadingContainer}
                zIndex={1}
            />
        )}
        <WebView
            ref={webviewRef}
            key={reload}
            source={{ html }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            injectedJavaScript={injectedJavaScript}
            onMessage={(event) => {
                const message = JSON.parse(event.nativeEvent.data);
                if (message.type === 'TOUCH_END') {
                    handleTouchEnd(message.data);
                } else if (message.type === 'HANDLE_NEXT') {
                    console.log('Handling next');
                    handleNext(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
                } else if (message.type === 'HANDLE_PREVIOUS') {
                    console.log('Handling previous');
                    handlePrevious(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
                } else {
                    handleMessage(
                        event,
                        setDrawerItems,
                        pageOffsets,
                        setPageOffsets,
                        setCurrentPage,
                        setCurrentTable,
                        webviewRef,
                        navigation,
                        localStorage,
                        setLoading,
                        setFirstTable
                    );
                }
            }}
            style={presentationStyles.webview}
        >
            
        </WebView>
        </View>

    );
};
