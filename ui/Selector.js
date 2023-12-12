import Dropdown from 'react-native-input-select';
import React, { useState, useCallback, useEffect } from 'react';
import musicList from '../data/FileNames';


const FileDropdown = ({song, setSong}) => {
    return (
        <Dropdown
          placeholder="Select a song..."
          options = {musicList['genres']}
          selectedValue={song}
          onValueChange={(song) => setSong(song)}
          primaryColor={'green'}
        />
      );
}

export default FileDropdown;