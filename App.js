import React from 'react';
import { GlobalSafeArea } from './src/utils/GlobalSafeArea';
import { Routes } from './src/routes/Routes';
import { NavigationContainer } from '@react-navigation/native';

import {
  DMSans_400Regular,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GlobalSafeArea>
  );
}
