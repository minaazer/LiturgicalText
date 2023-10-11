import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const Kiahk = () => {
  const webviewRef = useRef(null);



  useEffect(() => {
    const runFirst = `
      var style = document.createElement('style');
      style.innerHTML = \`
        .arabic {
          /* Add other styles for .arabic class */
        }
        .coptic {
          /* Add other styles for .coptic class */
        }
      \`;
      document.head.appendChild(style);
    `;
  
    webviewRef.current.injectJavaScript(runFirst);
  }, []);
  
  
  return (
    <View style={styles.container}>
      <WebView 
        ref={webviewRef}
        source={require('../../data/kiahk.html')} 
        //scrollEnabled={false}
        originWhitelist={['*']} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onMessage={event => {
          console.log(event.nativeEvent.data); // Here you can handle messages received from WebView
        }}
       injectedJavaScript={`console.log = function(message) {
          window.ReactNativeWebView.postMessage(message);
        }`}    
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 10,
  },
  webview: {
    flex: 1,
  },
  leftControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)', // semi-transparent
  },
  rightControl: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)', // semi-transparent
  },
});

export default Kiahk;
