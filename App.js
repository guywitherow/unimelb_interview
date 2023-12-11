import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Fraunces': require('./assets/fonts/Fraunces.ttf'),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <>
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000C38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Fraunces',
    color: '#D2CEC8',
  }
});