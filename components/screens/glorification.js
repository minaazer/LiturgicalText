import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions, Button } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PagerView from 'react-native-pager-view';
import TranslationRow from '../TranslationRow'; 
import combinedData from '../../data/combined_data.json';
import * as SplashScreen from 'expo-splash-screen';
import { DrawerItem,  DrawerContentScrollView , createDrawerNavigator } from '@react-navigation/drawer';
const PageIndexContext = React.createContext();

const PageIndexProvider = ({ children }) => {
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <PageIndexContext.Provider value={{ pageIndex, setPageIndex }}>
            {children}
        </PageIndexContext.Provider>
    );
};

function RightDrawerContent(props) {
    const { state, navigation } = props;
    const { setPageIndex } = React.useContext(PageIndexContext);
  
    const calculatePageIndex = (sectionIndex) => {
        let pageIndex = 0;
        for (let i = 0; i < sectionIndex; i++) {
            pageIndex += combinedData[i].text.length;
        }
        return pageIndex;
    };

    return (
        <DrawerContentScrollView {...props}>
         
            {combinedData.map((section, index) => (
                <DrawerItem 
                    key={index} 
                    label={section.enTitle} 
                    onPress={() => {
                        const pageIndex = calculatePageIndex(index);
                        console.log("Navigating to MainContent with pageIndex:", pageIndex);
                        setPageIndex(pageIndex);
                        navigation.closeDrawer();

                    }}
                />
            ))}
        </DrawerContentScrollView>
    );
}

const rightMenu = createDrawerNavigator();

SplashScreen.preventAutoHideAsync();

const MainContent = ({ navigation , route }) => {
    console.log("MainContent route:", route);
    const { pageIndex, setPageIndex } = React.useContext(PageIndexContext);


    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateHeight = ({ window }) => {
            setScreenHeight(window.height - 20);
        };

        const dimensionsSubscription = Dimensions.addEventListener('change', updateHeight);
        return () => dimensionsSubscription && dimensionsSubscription.remove();
    }, []);

    const pagerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const flattenedData = useMemo(() => combinedData.flatMap(section => 
        section.text.map((data, rowIndex) => {
            if (rowIndex === 0) {
                return { ...data, enTitle: section.enTitle, arTitle: section.arTitle };
            }
            return data;
        })
    ), []);

    const handlePageTap = (event) => {
        const touchX = event.nativeEvent.pageX;
        const screenWidth = Dimensions.get('window').width;

        if (touchX < screenWidth / 2 && currentPage > 0) {
            pagerRef.current.setPageWithoutAnimation(currentPage - 1);
            setCurrentPage(currentPage - 1);
        } else if (touchX >= screenWidth / 2 && currentPage + 1 < flattenedData.length) {
            pagerRef.current.setPageWithoutAnimation(currentPage + 1);
            setCurrentPage(currentPage + 1);
        } else {
            pagerRef.current.setPageWithoutAnimation(0);
            setCurrentPage(0);
        }
    };

    
    
    useEffect(() => {
        pagerRef.current && pagerRef.current.setPageWithoutAnimation(pageIndex);
        setCurrentPage(pageIndex);
    }, [pageIndex]);
    
    return (
        <View style={styles.container}>
            <PagerView 
                style={styles.viewPager} 
                initialPage={pageIndex}
                scrollEnabled={false} 
                ref={pagerRef}
                onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
                pageMargin={10}
                orientation={'horizontal'}
                offscreenPageLimit={2}
                overScrollMode={'never'}
            >
                {flattenedData.map((data, index) => (
                    <View key={index} style={{ flex: 1 }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={handlePageTap}>
                            <TranslationRow 
                                data={data}
                                availableHeight={screenHeight-30}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </PagerView>
            <StatusBar style='dark' />
        </View>
    );
};

const Glorification = () => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaProvider>
            <PageIndexProvider>
            <rightMenu.Navigator 
                initialRouteName="MainContent"
                drawerType="slide"
                screenOptions={{
                    headerShown: false, // Hide the default header
                    gestureDirection: 'horizontal-inverted', // For RTL swipe gesture
                    drawerPosition: 'right',
                    swipeEdgeWidth: screenWidth /2 ,
                }}
                drawerContent={props => <RightDrawerContent {...props} />}

                 >
                {combinedData.map((section, index) => (
                    <rightMenu.Screen 
                        key={index} 
                        name={`Section-${index}`} 
                        component={MainContent} 
                        options={{ drawerLabel: section.enTitle }} 
                        
                    />
                ))}
            </rightMenu.Navigator>
            </PageIndexProvider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingTop: 1,
        paddingBottom: 20,
        backgroundColor: 'black',
    },
    viewPager: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
        paddingTop: 2,
    }
});

export default Glorification;
