import Dropdown from 'react-native-input-select';
import React, { useState, useCallback, useEffect } from 'react';
import { Asset } from 'expo-asset';

const FileDropdown = () => {

    const [song, setSong] = useState();

    return (
        <Dropdown
          placeholder="Select a song..."
          options={[
            {
              title: 'Blues',
              data: [
                { label: 'Pizza', value: 'A' },
                { label: 'Burger', value: 'B' },
                { label: 'Risotto', value: 'C' },
              ],
            },
            {
              title: 'Classical',
              data: [
                { label: 'Ice cream', value: 'D' },
                { label: 'Cheesecake', value: 'E' },
              ],
            },
            {
              title: 'Drinks',
              data: [
                { label: 'Water', value: 'F' },
                { label: 'Coke', value: 'G' },
                { label: 'Juice', value: 'H' },
              ],
            },
          ]}
          selectedValue={song}
          onValueChange={(value) => setSong(value)}
          primaryColor={'green'}

        />
      );
}

export default FileDropdown;