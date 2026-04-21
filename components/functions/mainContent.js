import React, { useState, useEffect, useRef, useContext, useCallback, useMemo } from 'react';
import { View, ActivityIndicator, DeviceEventEmitter, Dimensions, Platform, StyleSheet, useWindowDimensions } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import { WebView } from 'react-native-webview';
import { handleMessage, handleNext, handlePrevious, handleDrawerItemPress } from './renderFunctions'; // Assuming this is imported
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import localStorage from './localStorage';
import SettingsContext from '../../settings/settingsContext';
import {ExplanationPopup} from '../reusableComponents/explanationPopup';
import explanationsData from '../../data/jsons/explanations.json'; // Import the data
import imagesData from '../../data/jsons/images.json'; // Import the images data
import { getJson } from './jsonCache';
import { ImagePopup } from '../reusableComponents/imagePopup'; // Import the ImagePopup component
import { togglePopupAudio , stopPopupAudio } from '../reusableComponents/audioPopup'; // Import audio functions
import AudioControlsPopup from '../reusableComponents/audioPopup';


const WRAPPER_ROUTE_NAMES = new Set(['MainStack', 'MainContent']);


export const MainContent = ({
    html,
    webviewRef,
    setDrawerItems,
    setCurrentTable,
    currentTable,
    openRightDrawer,
}) => {
    const [settings] = useContext(SettingsContext);
    const navigation = useNavigation();
    const route = useRoute();
    const parentState = navigation.getParent?.()?.getState?.();
    const parentRoutes = parentState?.routes || [];
    const nearestContentRoute = [...parentRoutes]
        .reverse()
        .find((parentRoute) => parentRoute?.name && !WRAPPER_ROUTE_NAMES.has(parentRoute.name));
    const currentRouteName =
        nearestContentRoute?.name ||
        (route?.name && !WRAPPER_ROUTE_NAMES.has(route.name) ? route.name : "") ||
        route?.name ||
        "";
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
    const [explanationsJson, setExplanationsJson] = useState(explanationsData);
    const [imagesJson, setImagesJson] = useState(imagesData);
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const lastWindowSize = useRef({ width: Math.round(windowWidth), height: Math.round(windowHeight) });
    const ignoreNativeTapUntil = useRef(0);
    const nativeTapInFlight = useRef(false);
    const nativeTapInFlightTimeout = useRef(null);
    const nativeTapRequestId = useRef(0);
    const pendingNativeTap = useRef(null);
    const nativeTapTargets = useRef([]);
    const currentPageRef = useRef(currentPage);
    const pageOffsetsRef = useRef(pageOffsets);

    const isScrollMode = settings?.displayMode === "scroll";
    const lastDisplayMode = useRef(isScrollMode);


    const screenWidth = Dimensions.get('window').width;

    const isFocused = useIsFocused();
    const drawerStatus = useDrawerStatus();
    const drawerIsOpen = drawerStatus === 'open';
    const wasDrawerOpen = useRef(false);
    const lastDrawerState = useRef(drawerIsOpen);
    const isInitialMount = useRef(true);
    const drawerPanHandled = useSharedValue(false);

    useEffect(() => {
        currentPageRef.current = currentPage;
    }, [currentPage]);

    useEffect(() => {
        pageOffsetsRef.current = pageOffsets;
    }, [pageOffsets]);

    const handleTouchEnd = useCallback((touchX) => {
            const latestCurrentPage = currentPageRef.current;
            const latestPageOffsets = pageOffsetsRef.current;
            if (touchX < screenWidth / 2) {
                handlePrevious(latestCurrentPage, setCurrentPage, latestPageOffsets, setCurrentTable, webviewRef);
            } else if (touchX >= screenWidth / 2) {
                handleNext(latestCurrentPage, setCurrentPage, latestPageOffsets, setCurrentTable, webviewRef);
            }
    }, [screenWidth, setCurrentTable, webviewRef]);

    const handleNativeTap = useCallback((x, y) => {
        if (isScrollMode || drawerIsOpen || !webviewRef.current) {
            return;
        }

        if (popupVisible || imagePopupVisible || audioPopupVisible) {
            return;
        }

        if (Date.now() < ignoreNativeTapUntil.current) {
            return;
        }

        const safeX = Number.isFinite(x) ? Math.round(x) : 0;
        const safeY = Number.isFinite(y) ? Math.round(y) : 0;
        const tapId = nativeTapRequestId.current + 1;
        nativeTapRequestId.current = tapId;

        const target = nativeTapTargets.current.find((candidate) => {
            const hitSlop = candidate.hitSlop || 0;
            return (
                safeX >= candidate.left - hitSlop &&
                safeX <= candidate.right + hitSlop &&
                safeY >= candidate.top - hitSlop &&
                safeY <= candidate.bottom + hitSlop
            );
        });

        if (!target) {
            handleTouchEnd(safeX);
            return;
        }

        if (nativeTapInFlight.current) {
            return;
        }

        nativeTapInFlight.current = true;
        pendingNativeTap.current = { id: tapId, x: safeX, y: safeY };
        if (nativeTapInFlightTimeout.current) {
            clearTimeout(nativeTapInFlightTimeout.current);
        }
        nativeTapInFlightTimeout.current = setTimeout(() => {
            if (pendingNativeTap.current && pendingNativeTap.current.id === tapId) {
                pendingNativeTap.current = null;
                nativeTapInFlight.current = false;
                nativeTapInFlightTimeout.current = null;
            }
        }, 700);

        webviewRef.current.injectJavaScript(`
            if (window.handleNativeTapElementById) {
                window.handleNativeTapElementById(${JSON.stringify(target.nativeTapId)}, ${tapId});
            }
            true;
        `);
    }, [audioPopupVisible, drawerIsOpen, handleTouchEnd, imagePopupVisible, isScrollMode, popupVisible, webviewRef]);

    const isStaleNativeTapResponse = useCallback((tapId) => {
        return tapId && (!pendingNativeTap.current || pendingNativeTap.current.id !== tapId);
    }, []);

    const releaseNativeTapLock = useCallback((delay = 0) => {
        if (nativeTapInFlightTimeout.current) {
            clearTimeout(nativeTapInFlightTimeout.current);
            nativeTapInFlightTimeout.current = null;
        }
        pendingNativeTap.current = null;

        if (delay > 0) {
            nativeTapInFlightTimeout.current = setTimeout(() => {
                nativeTapInFlight.current = false;
                nativeTapInFlightTimeout.current = null;
            }, delay);
            return;
        }

        nativeTapInFlight.current = false;
    }, []);

    const handleNativeDrawerPan = useCallback((startX, translationX) => {
        if (isScrollMode || drawerIsOpen) {
            return;
        }

        const edgeGuardWidth = 8;
        const drawerGestureWidth = Math.min(180, Math.max(84, windowWidth * 0.2));
        const dragThreshold = 28;
        const leftGestureStart =
            startX >= edgeGuardWidth &&
            startX <= edgeGuardWidth + drawerGestureWidth;
        const rightGestureStart =
            startX <= windowWidth - edgeGuardWidth &&
            startX >= windowWidth - edgeGuardWidth - drawerGestureWidth;

        if (leftGestureStart && translationX > dragThreshold) {
            navigation.getParent()?.openDrawer?.();
            return;
        }

        if (rightGestureStart && translationX < -dragThreshold) {
            if (openRightDrawer) {
                openRightDrawer();
            } else {
                navigation.openDrawer?.();
            }
        }
    }, [drawerIsOpen, isScrollMode, navigation, openRightDrawer, windowWidth]);

    const handleNativeDrawerPanStart = useCallback(() => {
        if (!isScrollMode && webviewRef.current) {
            webviewRef.current.injectJavaScript(`window._suspendPaginate = true; true;`);
        }
    }, [isScrollMode, webviewRef]);

    const nativeTapGesture = useMemo(
        () =>
            Gesture.Tap()
                .maxDistance(14)
                .maxDuration(450)
                .onEnd((event, success) => {
                    if (success) {
                        runOnJS(handleNativeTap)(event.x, event.y);
                    }
                }),
        [handleNativeTap]
    );

    const nativeDrawerPanGesture = useMemo(
        () =>
            Gesture.Pan()
                .activeOffsetX([-18, 18])
                .failOffsetY([-90, 90])
                .onBegin(() => {
                    drawerPanHandled.value = false;
                    runOnJS(handleNativeDrawerPanStart)();
                })
                .onUpdate((event) => {
                    if (!drawerPanHandled.value && Math.abs(event.translationX) > 28) {
                        drawerPanHandled.value = true;
                        runOnJS(handleNativeDrawerPan)(event.x - event.translationX, event.translationX);
                    }
                })
                .onFinalize(() => {
                    drawerPanHandled.value = false;
                }),
        [drawerPanHandled, handleNativeDrawerPan, handleNativeDrawerPanStart]
    );

    const nativeContentGesture = useMemo(
        () => Gesture.Simultaneous(nativeTapGesture, nativeDrawerPanGesture),
        [nativeTapGesture, nativeDrawerPanGesture]
    );


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
        // Only show spinner on true initial mount or when no table is selected
        const shouldShowSpinner = isInitialMount.current || !currentTable;

            if (hasLeftScreen && currentTable) {
            if (shouldShowSpinner) setRefreshing(true);
            timeout = setTimeout(() => {
                if (!isScrollMode) {
                    webviewRef.current.injectJavaScript(`paginateTables();`);
                }
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
                    if (!isScrollMode) {
                        webviewRef.current.injectJavaScript(`paginateTables();`);
                    }
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

}, [isFocused, drawerIsOpen, loading, isScrollMode]);

// Resume pagination after drawer gestures without re-paginating during the drawer animation.
useEffect(() => {
    if (!webviewRef.current || isScrollMode) return;

    if (drawerIsOpen) {
        lastDrawerState.current = drawerIsOpen;
        return;
    } else if (lastDrawerState.current && !drawerIsOpen) {
        webviewRef.current.injectJavaScript(`
            window._suspendPaginate = false;
            if (typeof window._lastPaginateHeight === 'undefined') {
                window._lastPaginateHeight = window.innerHeight;
            }
            window._lastPaginateHeight = window.innerHeight;
            true;
        `);
    }

    lastDrawerState.current = drawerIsOpen;
}, [drawerIsOpen, webviewRef, isScrollMode]);

useEffect(() => {
    if (Platform.OS !== "android") {
        return undefined;
    }

    const nextKeyCodes = new Set([
        20, // KEYCODE_DPAD_DOWN
        22, // KEYCODE_DPAD_RIGHT
        23, // KEYCODE_DPAD_CENTER
        24, // KEYCODE_VOLUME_UP
        42, // KEYCODE_N
        62, // KEYCODE_SPACE
        66, // KEYCODE_ENTER
        81, // KEYCODE_PLUS
        87, // KEYCODE_MEDIA_NEXT
        93, // KEYCODE_PAGE_DOWN
        160, // KEYCODE_NUMPAD_ENTER
    ]);
    const previousKeyCodes = new Set([
        19, // KEYCODE_DPAD_UP
        21, // KEYCODE_DPAD_LEFT
        25, // KEYCODE_VOLUME_DOWN
        44, // KEYCODE_P
        67, // KEYCODE_DEL / Backspace
        69, // KEYCODE_MINUS
        88, // KEYCODE_MEDIA_PREVIOUS
        92, // KEYCODE_PAGE_UP
    ]);

    const subscription = DeviceEventEmitter.addListener("LiturgicalHardwareKey", (event) => {
        if (
            isScrollMode ||
            drawerIsOpen ||
            popupVisible ||
            imagePopupVisible ||
            audioPopupVisible
        ) {
            return;
        }

        const keyCode = event?.keyCode;
        if (nextKeyCodes.has(keyCode)) {
            handleNext(
                currentPageRef.current,
                setCurrentPage,
                pageOffsetsRef.current,
                setCurrentTable,
                webviewRef
            );
            return;
        }

        if (previousKeyCodes.has(keyCode)) {
            handlePrevious(
                currentPageRef.current,
                setCurrentPage,
                pageOffsetsRef.current,
                setCurrentTable,
                webviewRef
            );
        }
    });

    return () => subscription.remove();
}, [
    audioPopupVisible,
    drawerIsOpen,
    imagePopupVisible,
    isScrollMode,
    popupVisible,
    setCurrentTable,
    webviewRef,
]);

    useEffect(() => {
        let isMounted = true;
        getJson("explanations.json", explanationsData).then((data) => {
            if (isMounted && data) {
                setExplanationsJson(data);
            }
        });
        getJson("images.json", imagesData).then((data) => {
            if (isMounted && data) {
                setImagesJson(data);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

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
        window._scrollMode = ${isScrollMode ? "true" : "false"};
        window._nativeTapMode = ${!isScrollMode ? "true" : "false"};
        window._nativeHardwareKeyMode = ${Platform.OS === "android" && !isScrollMode ? "true" : "false"};

        initialize();
        
        listenToTableCaptions(); // Initialize table logic
        
    `;


    useEffect(() => {
        if (reload < 3) {
            setReload(reload + 1);
        }
    }, [reload, currentFileStates]);

    useEffect(() => {
        if (lastDisplayMode.current !== isScrollMode) {
            lastDisplayMode.current = isScrollMode;
            setPageOffsets([]);
            setCurrentPage(0);
            setReload((prev) => prev + 1);
        }
    }, [isScrollMode]);

    useEffect(() => {
        const roundedWidth = Math.round(windowWidth);
        const roundedHeight = Math.round(windowHeight);
        const sizeChanged =
            lastWindowSize.current.width !== roundedWidth ||
            lastWindowSize.current.height !== roundedHeight;

        if (!sizeChanged) {
            return;
        }

        lastWindowSize.current = { width: roundedWidth, height: roundedHeight };
        setPageOffsets([]);
        setCurrentPage(0);
        setLoading(true);
    }, [windowWidth, windowHeight]);
    
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
            key={`${reload}-${Math.round(windowWidth)}-${Math.round(windowHeight)}`}
            source={{ html, baseUrl: Platform.OS === 'android' ? 'file:///android_asset/' : undefined }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            pointerEvents="auto"
            allowFileAccess={true}
            allowFileAccessFromFileURLs={true}
            allowUniversalAccessFromFileURLs={true}
            mixedContentMode="always"
            androidLayerType={Platform.OS === "android" && !isScrollMode ? "software" : undefined}
            injectedJavaScript={injectedJavaScript}
            onMessage={(event) => {
                const message = JSON.parse(event.nativeEvent.data);
                const acknowledgeWebViewMessage = () => {
                    webviewRef.current?.injectJavaScript(
                        `window.postMessage(JSON.stringify({ type: 'ACKNOWLEDGED', originalType: '${message.type}' })); true;`
                    );
                };
                if (message.type === 'TOUCH_END') {
                    acknowledgeWebViewMessage();
                    if (!isScrollMode) {
                        handleTouchEnd(message.data);
                    }
                } else if (message.type === 'NATIVE_TAP_UNHANDLED') {
                    acknowledgeWebViewMessage();
                    if (isStaleNativeTapResponse(message.data?.tapId)) {
                        return;
                    }
                    releaseNativeTapLock();
                } else if (message.type === 'NATIVE_TAP_HANDLED') {
                    acknowledgeWebViewMessage();
                    if (isStaleNativeTapResponse(message.data?.tapId)) {
                        return;
                    }
                    ignoreNativeTapUntil.current = Date.now() + 450;
                    releaseNativeTapLock(450);
                    return;
                } else if (message.type === 'NATIVE_TAP_TARGETS') {
                    acknowledgeWebViewMessage();
                    nativeTapTargets.current = Array.isArray(message.data) ? message.data : [];
                } else if (message.type === 'HANDLE_NEXT') {
                    acknowledgeWebViewMessage();
                    handleNext(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef, isScrollMode);
                } else if (message.type === 'HANDLE_PREVIOUS') {
                    acknowledgeWebViewMessage();
                    handlePrevious(currentPage, setCurrentPage, pageOffsets, setCurrentTable, webviewRef, isScrollMode);
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
                        explanationsJson, // Pass the data
                        setImagePopupVisible, // Pass image popup
                        setImageUri, // Pass image URI setter
                        imagesJson, // Pass the images data
                        togglePopupAudio, // Pass audio toggle function
                        stopPopupAudio, // Pass audio stop function
                        setIsAudioPaused,
                        setCurrentAudioTitle,
                        setAudioPopupVisible,
                        isScrollMode ? "scroll" : "slideshow",
                        currentRouteName
                    );
                }
            }}
            style={presentationStyles.webview}
        >
            
        </WebView>
        {!isScrollMode && (
            <GestureDetector gesture={nativeContentGesture}>
                <View collapsable={false} style={styles.nativeTapLayer} />
            </GestureDetector>
        )}
        <ExplanationPopup
            visible={popupVisible}
            popupData={popupData}
            onClose={() => {
                ignoreNativeTapUntil.current = Date.now() + 450;
                setPopupVisible(false);
                setImagePopupVisible(false); // Just in case
            }}
            />
        <ImagePopup
            visible={imagePopupVisible}
            imageUri={imageUri}
            onClose={() => {
                ignoreNativeTapUntil.current = Date.now() + 450;
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

const styles = StyleSheet.create({
    nativeTapLayer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
});


