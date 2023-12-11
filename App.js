import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import {styles} from './ui/Style';
import FileDropdown from './ui/Selector';
import SongRead from './io/SongRead';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Fraunces': require('./assets/fonts/Fraunces.ttf'),
        'SourceSansPro': require('./assets/fonts/SourceSans3.ttf'),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  return (
    <View style={[styles.root,
      {
        flexDirection: 'column',
      }
    ]}>

      {fontsLoaded ? (
        <>
          <View style={styles.top}>

            <FileDropdown></FileDropdown>
            <Text style={styles.title}>Box1</Text>
          
          </View>
          <View style={styles.bottom}>

            <SongRead></SongRead>
            <Text style={styles.title}>Box2</Text>
          
          </View>
          <StatusBar style="auto" />
        </>
      ) : null}

      
    </View>
  );
}