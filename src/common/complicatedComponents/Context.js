import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';
import * as RNLocalize from 'react-native-localize';
import en from './languages/en';
import es from './languages/es';

const DEFAULT_LANGUAGE = 'en';
const APP_LANGUAGE = 'appLanguage';
const languages = {en, es};
export const strings = new LocalizedStrings(languages);
export const LocalizationContext = createContext({
  strings,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});
export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const setLanguage = language => {
    strings.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
    if (currentLanguage) {
      setLanguage(currentLanguage);
    } else {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = strings.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        locale => locale.languageCode,
      );
      phoneLocaleCodes.some(code => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    }
  };
  return (
    <LocalizationContext.Provider
      value={{
        strings,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
