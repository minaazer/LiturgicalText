import React from 'react';
import { useState , useRef , useEffect } from 'react';
import { StyleSheet, View , Text , TouchableWithoutFeedback , Dimensions } from 'react-native';
import flattenedData from '../../data/flattened_data.json';
import { FlashList } from '@shopify/flash-list';




const Glorification2 = () => {

    const [partiallyVisibleRow, setpartiallyVisibleRow] = useState(0);
    const [bottomRowIndexArr, setBottomRowIndexArr] = useState([0]);
    const [topRowIndexArr, setTopRowIndexArr] = useState([0]);
    const [rowLayouts, setRowLayouts] = useState([]);

    const flatListRef = useRef(null);
    const rowRefs = useRef([]);



    useEffect(() => {
        // Initialize rowRefs with Ref objects for each row in flattenedData
        rowRefs.current = flattenedData.map(() => React.createRef());
      }, []);
    
    const RenderOverlay = (rowIndex , layouts) => {

      let firstRow = topRowIndexArr[topRowIndexArr.length - 1]+1;
      let lastRow = partiallyVisibleRow;

      const visibleHeight = Object.values(layouts)
      .filter((layout, index, self) => 
        layout.rowIndex >= firstRow && 
        layout.rowIndex <= lastRow && 
        index === self.findIndex(l => l.rowIndex === layout.rowIndex)
      )
      .reduce((total, layout) => total + layout.height, 0);

        const rowLayout =  Object.values(layouts).find((layout) => {

            return layout.rowIndex === rowIndex+1;
          }); 

          if (!rowLayout) { 
          return null;
        }
        if (visibleHeight === 0) {
          return null;
        }
      
        // Extract position and other properties from rowLayout
        const { height, width } = rowLayout;

        // Define styles for the overlay
        const overlayStyles = {
          position: 'absolute',
          top: visibleHeight,
          left: 0,
          width,
          height: height,
          backgroundColor: 'black'
        };
      
        return (
          <View style={overlayStyles}>       
          </View>
        );
      };
      
    

    const renderItem = ({ item }) => {
      return (
         <TranslationRow
              data = {item}
              itemIndex = {item.index} 
            
          />
      );  
    };

    const TranslationRow = ({ data , itemIndex }) => {
        const enVerse = data?.enVerse || "";
        const cpVerse = data?.cpVerse || "";
        const arVerse = data?.arVerse || "";
        const enPhonics = data?.enPhonics || "";
        const arPhonics = data?.arPhonics || "";
        const cpFont = data?.cpFont || "";
        const enTitle = data?.enTitle || "";
        const cpTitle = data?.cpTitle || "";
        const arTitle = data?.arTitle || "";
        const fontSize = data?.fontSize || 25;   


        const handleRowLayout = (rowIndex) => {
          
            // Check if the rowRef exists
            if (rowRefs.current[itemIndex] && rowRefs.current[itemIndex].current) {
              // Measure the layout of the row
              rowRefs.current[itemIndex].current.measure(
                (x, y, width, height, pageX, pageY) => {
                    setRowLayouts((prevLayouts) => [
                      ...prevLayouts,
                      { rowIndex, width, height },
                    ]);
                }
              );
            }
          };      
      
          
        return (
    
            <View 
            onLayout={() => handleRowLayout(itemIndex)}
            ref={rowRefs.current[itemIndex]}
            >
                {(enTitle || arTitle || cpTitle) && (
                    <View style={styles.row}>
                        {enTitle && <Text style={[styles.title, {fontSize: fontSize}]}>{enTitle}</Text>}
                        {arTitle && <Text style={[styles.title, {fontSize: fontSize}]}>{arTitle}</Text>}
                    </View>
                )}
                <View style={styles.row}>
                    <Text style={[styles.enText, {fontSize: fontSize}]}>{enVerse}</Text>
                    <Text style={[styles.cpText, {fontSize: fontSize}, {fontFamily: cpFont}]}>{cpVerse}</Text>
                    <Text style={[styles.arText, {fontSize: fontSize}]}>{arVerse}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.textHalfWidthEn, {fontSize: fontSize}]}>{enPhonics}</Text>
                    <Text style={[styles.textHalfWidthAr, {fontSize: fontSize}]}>{arPhonics}</Text>
                </View>
            </View>
        );
    };
    

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 90, // Adjust this threshold as needed
        waitForInteraction: false,
      };
    
      const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
          const lastVisibleItem = viewableItems[viewableItems.length - 1];
          setpartiallyVisibleRow(lastVisibleItem.index+1);
          setBottomRowIndexArr((prevArr) => prevArr.concat(lastVisibleItem.index+1));
        }
      };
    

      const handlePageTap = (event) => {
        
        const touchX = event.nativeEvent.pageX;
          const screenWidth = Dimensions.get('window').width;
  
          if (touchX < screenWidth / 2) {
  
            // Handle tap on the left side of the screen
      if (flatListRef.current && bottomRowIndexArr.length > 0) {
        // Find the current index within the BottomRowIndexArr array
        const currentIndex = bottomRowIndexArr.findIndex(idx => idx === partiallyVisibleRow);
  
        // Calculate new index to scroll up
        const newIndexInArray = currentIndex - 2;
  
        // Check if newIndexInArray is valid
        if(newIndexInArray >= 0) {
          const newIndex = bottomRowIndexArr[newIndexInArray];
          setTopRowIndexArr((prevArr) => prevArr.concat(newIndex));

          // Scroll to the new index
          flatListRef.current.scrollToIndex({
            index: newIndex,
            animated: null, // Set to true or false based on your requirement
            viewPosition: 0, 
          });        
          RenderOverlay(partiallyVisibleRow, rowLayouts);


        }
      }
          } else if (touchX >= screenWidth / 2 ) {
  
                if (flatListRef.current) {
                  setTopRowIndexArr((prevArr) => prevArr.concat(partiallyVisibleRow));

                  // Scroll to the stored item index
                  flatListRef.current.scrollToIndex({
                    index: partiallyVisibleRow,
                    animated: null, // Set to false if you don't want animation
                    viewPosition: 0, 
                  });
                  RenderOverlay(partiallyVisibleRow, rowLayouts);

                }
            } else {
             
          }
      };
  

    
    



    
    return (
        <View style={{ flex: 1 , marginTop:40 }}>
        <TouchableWithoutFeedback  onPress={handlePageTap}>
          <View style={{ flex: 1 }}>
        <FlashList
            data = {flattenedData}
            keyExtractor={(item) => item.index}
            contentContainerStyle={{backgroundColor : 'black'}}
            renderItem={renderItem}
            ref={flatListRef}
            pagingEnabled={true}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            estimatedItemSize={252}
        />
                {RenderOverlay(partiallyVisibleRow, rowLayouts)}
          </View>
        </TouchableWithoutFeedback>
        </View>
    )
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
        zIndex: 999999,
    },
    overlayText: {
        color: 'red',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        textAlign: 'center',
    },
    separator: {
        width: Dimensions.get('window').width, // Full width of the screen
        height: 50, // Height of the separator
        backgroundColor: 'gray', // Separator color
      },

    tableContainer: {
   
        width: '100%',
        height: '100%'
    },
    viewPager: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
        paddingTop: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 2,
        paddingVertical: 2,
        backgroundColor: 'black',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: 'black',
        
    },
    enText: {
        width: '35%',
        fontSize: 30,
        color: 'white',
        fontFamily: 'Times New Roman'
    },
    cpText: {
        width: '39%',
        fontSize: 30,
        color: 'white',
    },
    arText: {
        width: '25%',
        fontSize: 30,
        color: 'white',
    },
    // New style for 50% width
    textHalfWidthEn: {
        width: '55%',
        color: 'yellow',
        fontSize: 30,
        fontFamily: 'Times New Roman'
    },
    textHalfWidthAr: {
        width: '45%',
        color: 'yellow',
        fontSize: 30,
        fontFamily: 'Times New Roman'
    },
    title: {
        width: '50%',
        color: 'yellow',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        textAlign: 'center'
    }
});

export default Glorification2;
