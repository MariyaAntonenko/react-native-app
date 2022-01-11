import React from 'react';
import {SafeAreaView} from '../../../../common/simpleComponents/SafeAreaView';
import {StatusBar} from 'react-native';
import {StyledButton} from '../../../../common/simpleComponents/Button';
import {StyledText} from '../../../../common/simpleComponents/Text';
import WebView from 'react-native-webview';
import {Block} from '../../../../common/simpleComponents/Block';

export const QrCodeResultScreen = ({
  isValidCode,
  onNavigationStateChange,
  result,
}) => {
  return (
    <SafeAreaView
      flex={1}
      width={'100%'}
      backgroundColor={'white'}
      pt={StatusBar.currentHeight}>
      <StyledButton
        paddingVertical={'10px'}
        paddingHorizontal={'10px'}
        onPress={onNavigationStateChange}>
        <StyledText fontWeight={'600'} fontSize={'20px'} color={'red'}>
          {isValidCode ? 'Go Back' : 'Try again'}
        </StyledText>
      </StyledButton>
      {isValidCode ? (
        <WebView source={{uri: `${result}`}} />
      ) : (
        <Block alignItems={'center'} justifyContent={'center'} pt={'200px'}>
          <StyledText fontSize={'30px'} color={'red'}>
            Not valid QR
          </StyledText>
        </Block>
      )}
    </SafeAreaView>
  );
};
