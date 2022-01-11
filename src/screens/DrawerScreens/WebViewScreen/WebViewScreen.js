import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {WebView} from 'react-native-webview';
import {StatusBar} from 'react-native';

export const WebViewScreen = () => {
  const arr = [2, 3];
  let result = arr.reduce((prev, current) => prev + current);
  let yourAlert = `alert('Just Click Me!');
  let div = document.createElement('div');
  div.style= "color:white;opacity:0.5;display:flex;justify-content:center;align-items:center;width:80%;height:20%;border-radius:9px;background:black;position:fixed;top:10%;left:10%;"
  div.innerHTML = "<p>${result + 100}</p>";
  document.body.append(div);
      true;
`;
  return (
    <SafeAreaView flex={1} pt={StatusBar.currentHeight}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={yourAlert}
        onMessage={event => {}}
        source={{uri: 'https://google.com/'}}
      />
    </SafeAreaView>
  );
};
