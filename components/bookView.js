import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PagerView from 'react-native-pager-view';
import TranslationRow from './TranslationRow'; 




const BookView = (book) => {
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

useEffect(() => {
      const updateHeight = ({ window }) => {
          setScreenHeight(window.height - 20);
      };

      // Add event listener
      const dimensionsSubscription = Dimensions.addEventListener('change', updateHeight);

      // Return a cleanup function to remove the event listener
      return () => dimensionsSubscription && dimensionsSubscription.remove();
  }, []);

  
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);


  const flattenedData = book.flatMap(section => 
    section.text.map((data, rowIndex) => {
      if (rowIndex === 0) {
        return { ...data, enTitle: section.enTitle, arTitle: section.arTitle };
      }
      return data;
    })
  );
  

  const handlePageTap = (event) => {
    const touchX = event.nativeEvent.pageX;
    const screenWidth = Dimensions.get('window').width;

    if (touchX < screenWidth / 2) {
        // Tap on the left side
        if (currentPage > 0) {
            pagerRef.current.setPageWithoutAnimation (currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    } else {
        // Tap on the right side
        if (currentPage + 1 < flattenedData.length) {
            pagerRef.current.setPageWithoutAnimation (currentPage + 1);
            setCurrentPage(currentPage + 1);
        } else {
            pagerRef.current.setPageWithoutAnimation (0);  // Loop back to the first page if you're at the end
            setCurrentPage(0);
        }
    }
};

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <PagerView 
                    style={styles.viewPager} 
                    initialPage={0}
                    scrollEnabled={false} 
                    ref={pagerRef}
                    onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
                    pageMargin={10}
                    orientation={'horizontal'}
                    offscreenPageLimit= {2}
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
    </SafeAreaView>
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
  paddingTop: 2,  }

});

export default BookView;
