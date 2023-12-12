import { Audio } from "expo-av";
import React, { useState, useEffect } from 'react';
import { Text, View } from "react-native";
import { styles } from "./Style";
import * as Progress from 'react-native-progress';
import { Feather } from '@expo/vector-icons';
import musicList from '../data/FileNames';

function SongTitle(songName) {
  if (songName !== "Nothing Playing") {
    return songName.slice(0, -4);
  }
  return songName;
}

export default function AudioPlayer({ song, setCurrentSong, estGenre }) {
  const [sound, setSound] = useState();
  const [songStatus, setsongStatus] = useState({"isLoaded":false});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function playSound() {
      try {
        if (sound) {
          await sound.unloadAsync();
        }
  
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  
        const genre = song.split('.')[0];
        let newFile = song.slice(0,-4);
        newFile += ".mp3";
        let exactFile = null;

        for (foundGenre in musicList['genres']) {
          for (file in musicList['genres'][foundGenre]['data']) {
            if (musicList['genres'][foundGenre]['data'][file]['value'] == song) {
              exactGenre = foundGenre;
              exactFile = musicList['genres'][foundGenre]['data'][file]['file'];
              break;
            }
          }
        }

        if (exactFile != null) {
          exactFile.downloadAsync();
          const source = { uri: exactFile.uri };
  
          const { sound: newSound } = await Audio.Sound.createAsync(
            source,
            { shouldPlay: true },
            onPlaybackStatusUpdate
          );
    
          setSound(newSound);
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error loading sound", error);
      }
    }
  
    playSound();
  }, [song]);

  const onPlaybackStatusUpdate = (status) => {
    setsongStatus(status);
  };

  const getProgressBar = () => {
    if (songStatus.isLoaded) {
      return (
        <Progress.Bar progress={songStatus.positionMillis / songStatus.durationMillis} width={null} />
      );
    } else {
      return (
        <Progress.Bar progress={0} width={null} />
      );
    }
  };

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getSongCurrentTime = () => { 
    if (songStatus.isLoaded) {
      if (Math.floor(songStatus.positionMillis / 1000) < 10) {
        return Math.floor(songStatus.positionMillis / 1000 / 60) + ":0" + Math.floor(songStatus.positionMillis / 1000);
      }
      return Math.floor(songStatus.positionMillis / 1000 / 60) + ":" + Math.floor(songStatus.positionMillis / 1000);
    } else {
      return "0:00";
    }
  }

  const getSongTotalTime = () => {
    if (songStatus.isLoaded) {
      if (Math.floor(songStatus.durationMillis / 1000) < 10) {
        return Math.floor(songStatus.durationMillis / 1000 / 60) + ":0" + Math.floor(songStatus.durationMillis / 1000);
      }
      return Math.floor(songStatus.durationMillis / 1000 / 60) + ":" + Math.floor(songStatus.durationMillis / 1000);
    } else {
      return "0:00";
    }
  }

  return (
    <View style={styles.playerContainer}>
      <View style={styles.songTitleContainer}>
        <Text style={styles.title}>{SongTitle(song)}</Text>
        <Text style={styles.body}>{estGenre}</Text>
      </View>
      <View style={styles.progressContainer}>
        {getProgressBar()}
      </View>
      <View style={styles.timeContainer}>
        <View style={styles.progressLeft}>
          <Text style={styles.duration}>{getSongCurrentTime()}</Text>
        </View>
        <View style={styles.progressRight}>
          <Text style={styles.duration}>{getSongTotalTime()}</Text>
        </View>
      </View>
      <View style={styles.controlContainer}>
        <Feather name={isPlaying ? "pause-circle" : "play-circle"} size={70} color="#FFF" onPress={handlePlayPause} />
      </View>
    </View>
  );
}
