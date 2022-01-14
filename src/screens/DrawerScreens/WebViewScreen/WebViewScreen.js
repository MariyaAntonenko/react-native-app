import React, {useRef} from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {WebView} from 'react-native-webview';
import {StatusBar} from 'react-native';

export const WebViewScreen = () => {
  let yourAlert = `
const loginField = document.getElementById('login_field');
const passwordField = document.getElementById('password');
const submitBtn = document.querySelector('.js-sign-in-button');
loginField.defaultValue = "login@mail.com";
passwordField.defaultValue = "password";

const getDataFromFields = (event) => {
  return {
  login: loginField.value,
  password: passwordField.value,
    }
  }
  const inputData = JSON.stringify(getDataFromFields());
  window.ReactNativeWebView.postMessage(inputData);
submitBtn.addEventListener('changed', getDataFromFields);
      true;
`;
  const onHandleMessage = event => {
    console.log(event.nativeEvent.data);
  };

  let myWebview = useRef();
  return (
    <SafeAreaView
      flex={1}
      pt={StatusBar.currentHeight}
      backgroundColor={'white'}>
      <WebView
        ref={myWebview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={yourAlert}
        onMessage={onHandleMessage}
        source={{uri: 'https://github.com/login'}}
      />
    </SafeAreaView>
  );
};
