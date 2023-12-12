import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {styles} from './ui/Style';
import FileDropdown from './ui/Selector';
import AudioPlayer from './ui/Player';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [song, setSong] = useState('Nothing Playing');


  useEffect(() => {
    //const image = fileNames['genres'][9]['data'][0]['image'];
    //const imageName = require("./assets/songs/spectographs/blues/blues00000.png");
    //processImage(image);
  }, []);

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

            <FileDropdown song={song} setSong={setSong}></FileDropdown>
            <AudioPlayer song={song} setSong={setSong} estGenre={"Classical"}></AudioPlayer>
          
          </View>
          <View style={styles.bottom}>

            <Text style={styles.title}>Graphy</Text>

          </View>
          <StatusBar style="auto" />
        </>
      ) : null}

      
    </View>
  );
}