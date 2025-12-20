import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, Dimensions, Platform } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import { WebView } from 'react-native-webview';
import { handleMessage, handleNext, handlePrevious, handleDrawerItemPress } from './renderFunctions'; // Assuming this is imported
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import localStorage from './localStorage';
import {ExplanationPopup} from '../reusableComponents/explanationPopup';
import explanationsData from '../../data/explanations.json'; // Import the data
import imagesData from '../../data/images.json'; // Import the images data
import { ImagePopup } from '../reusableComponents/imagePopup'; // Import the ImagePopup component
import { togglePopupAudio , stopPopupAudio } from '../reusableComponents/audioPopup'; // Import audio functions
import AudioControlsPopup from '../reusableComponents/audioPopup';



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
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({ title: '', text: '' });
    const [imagePopupVisible, setImagePopupVisible] = useState(false);
    const [imageUri, setImageUri] = useState('');
    const [audioPopupVisible, setAudioPopupVisible] = useState(false);
    const [currentAudioTitle, setCurrentAudioTitle] = useState('');
    const [isAudioPaused, setIsAudioPaused] = useState(true);
    const [isAudioPopupMinimized, setAudioPopupMinimized] = useState(false);



    const screenWidth = Dimensions.get('window').width;

    const isFocused = useIsFocused();
    const drawerStatus = useDrawerStatus();
    const drawerIsOpen = drawerStatus === 'open';
    const wasDrawerOpen = useRef(false);
    const lastDrawerState = useRef(drawerIsOpen);
    const isInitialMount = useRef(true);

    const handleTouchEnd = (touchX) => {
            if (touchX < screenWidth / 2) {
                handlePrevious(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            } else if (touchX >= screenWidth / 2) {
                handleNext(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef);
            }
    };


useEffect(() => {
    let timeout; // Declare a timeout variable for clean-up
    const isActive = isFocused || drawerIsOpen;

    // If the drawer is open, don't run refresh logic or show spinners
    if (drawerIsOpen) {
        wasDrawerOpen.current = true;
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }

    // If we just closed the drawer while still focused on this screen, skip refresh
    if (wasDrawerOpen.current && isFocused) {
        wasDrawerOpen.current = false;
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }

    if (isActive) {
        const lifecycleState = isInitialMount.current ? 'mounting-from-scratch' : 'premounted';
        const screenName = fileKey || 'unknown';
        console.log(`[MainContent] focus active | screen: ${screenName} | lifecycle: ${lifecycleState} | currentTable: ${currentTable || 'none'}`);

        // Only show spinner on true initial mount or when no table is selected
        const shouldShowSpinner = isInitialMount.current || !currentTable;

        if (hasLeftScreen && currentTable) {
            if (shouldShowSpinner) setRefreshing(true);
            timeout = setTimeout(() => {
                webviewRef.current.injectJavaScript(`paginateTables();`);
                handleDrawerItemPress(currentTable, webviewRef);
                setHasLeftScreen(false); // Reset the flag
                if (shouldShowSpinner) setRefreshing(false); // Reset refreshing state
            }, 1000);

        } else if (currentTable) {
            if (shouldShowSpinner) setRefreshing(true);
            timeout = setTimeout(() => {
                handleDrawerItemPress(currentTable, webviewRef);
                if (shouldShowSpinner) setRefreshing(false); // Reset refreshing state
            }, 1000);
        } else {
            if (shouldShowSpinner) setRefreshing(true);
            if (!loading) {
                timeout = setTimeout(() => {
                    webviewRef.current.injectJavaScript(`paginateTables();`);
                    handleDrawerItemPress(firstTable, webviewRef);
                    if (shouldShowSpinner) setRefreshing(false); // Reset refreshing state
                }, 1000);
            }
        }
        isInitialMount.current = false;
    } else if (!drawerIsOpen) {
        setCurrentTable(currentTable);
        setHasLeftScreen(true);
    }

    // Clean up the timeout
    return () => {
        if (timeout) clearTimeout(timeout);
    };

}, [isFocused, drawerIsOpen, loading]);

// Signal the WebView to suspend pagination during drawer gestures to avoid flicker
useEffect(() => {
    if (!webviewRef.current) return;

    if (drawerIsOpen) {
        webviewRef.current.injectJavaScript(`window._suspendPaginate = true;`);
    } else if (lastDrawerState.current && !drawerIsOpen) {
        // Drawer just closed: re-enable and repaginate only if height changed
        webviewRef.current.injectJavaScript(`
            window._suspendPaginate = false;
            if (typeof window._lastPaginateHeight === 'undefined') {
                window._lastPaginateHeight = window.innerHeight;
            }
            if (Math.abs(window.innerHeight - window._lastPaginateHeight) > 1) {
                paginateTables();
                window._lastPaginateHeight = window.innerHeight;
            }
        `);
    }

    lastDrawerState.current = drawerIsOpen;
}, [drawerIsOpen, webviewRef]);

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
                        setFirstTable,
                        setPopupVisible, // Pass visibility setter
                        setPopupData, // Pass data setter                  
                        explanationsData, // Pass the data
                        setImagePopupVisible, // Pass image popup
                        setImageUri, // Pass image URI setter
                        imagesData, // Pass the images data
                        togglePopupAudio, // Pass audio toggle function
                        stopPopupAudio, // Pass audio stop function
                        setIsAudioPaused,
                        setCurrentAudioTitle,
                        setAudioPopupVisible
                    );
                }
            }}
            style={presentationStyles.webview}
        >
            
        </WebView>

        <ExplanationPopup
            visible={popupVisible}
            popupData={popupData}
            onClose={() => {
                setPopupVisible(false);
                setImagePopupVisible(false); // Just in case
            }}
            />
        <ImagePopup
            visible={imagePopupVisible}
            imageUri={imageUri}
            onClose={() => {
                setImagePopupVisible(false);
                setPopupVisible(false); // Just in case
              }}
        />

        <AudioControlsPopup
        visible={audioPopupVisible}
        minimized={isAudioPopupMinimized}
        isPaused={isAudioPaused}
        title={currentAudioTitle}
        onPlayPause={() => togglePopupAudio(currentAudioTitle, setIsAudioPaused)}
        onStop={() => {
            stopPopupAudio();
            setAudioPopupVisible(false);
            setAudioPopupMinimized(false);
            setCurrentAudioTitle('');
        }}
        onMinimize={() => setAudioPopupMinimized(true)}
        onExpand={() => setAudioPopupMinimized(false)}
        />
        </View>
        

    );
};


