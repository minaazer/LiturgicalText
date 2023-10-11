import React , {useState , useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';



const TranslationRow = ({ data , availableHeight }) => {


    const enVerse = data?.enVerse || "";
    const cpVerse = data?.cpVerse || "";
    const arVerse = data?.arVerse || "";
    const enPhonics = data?.enPhonics || "";
    const arPhonics = data?.arPhonics || "";
    const cpFont = data?.cpFont || "";
    const enTitle = data?.enTitle || "";
    const cpTitle = data?.cpTitle || "";
    const arTitle = data?.arTitle || "";

    
    
    const [fontSize, setFontSize] = useState(20);
    const [minFontSize, setMinFontSize] = useState(5);
    const [maxFontSize, setMaxFontSize] = useState(40);

    const adjustFontSize = useCallback((height) => {
        // log the whole number of height and availableHeight
        if (height < availableHeight && fontSize < maxFontSize) {
            // If content height exceeds available space, decrease the font size.
            const newFontSize = (fontSize + 2);
           setFontSize(newFontSize);
        } else if (height > availableHeight ) {
            // If content height is below available space, increase the font size.
            const newFontSize = (fontSize -2);
            setMaxFontSize(newFontSize);
            setFontSize(newFontSize);   
        }
    }, [fontSize, availableHeight]);

    const handleLayout = (event) => {
        const height = event.nativeEvent.layout.height;
        adjustFontSize(height);
    };


    
    return (

        <View style={styles.column} onLayout={handleLayout}>
            <View>
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
        </View>
    );
};

const areEqual = (prevProps, nextProps) => {
    if (prevProps.data.data1 !== nextProps.data.data1) return false;
    if (prevProps.data.data2 !== nextProps.data.data2) return false;
    if (prevProps.data.data3 !== nextProps.data.data3) return false;
    return true;
  };
      

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        
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

export default React.memo(TranslationRow, areEqual);
