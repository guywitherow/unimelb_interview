import { Audio } from "expo-av";
import * as FileSystem from 'expo-file-system';

export default function AudioPlayer() {}

AudioPlayer.playSound = async function (
  source,
  initialStatus = { shouldPlay: true },
  onPlaybackStatusUpdate = null,
  downloadFirst = true
) {

  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  try {
    // Create a complete sound object
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus,
      onPlaybackStatusUpdate,
      downloadFirst
    );
    await sound.playAsync();

    console.log(status);

    // Play the sound
    

    console.log("Sound played! Unloading from memory...");

    // We are done...
    // Unload the sound from memory
    //sound.unloadAsync();
  } catch (err) {
    throw err;
  }
};