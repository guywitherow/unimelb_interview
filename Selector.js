import Dropdown from 'react-native-input-select';
import React, { useState, useCallback, useEffect } from 'react';

const FileDropdown = () => {

    const [song, setSong] = useState();

    return (
        <Dropdown
          placeholder="Select a song..."
          options={[
            { label: 'hiphop.00000', value: 'hiphop.00000' },
            { label: 'hiphop.00001', value: 'hiphop.00001' },
            { label: 'hiphop.00002', value: 'hiphop.00002' },
            { label: 'hiphop.00003', value: 'hiphop.00003' },
            { label: 'hiphop.00004', value: 'hiphop.00004' },
          ]}
          selectedValue={song}
          onValueChange={(value) => setSong(value)}
          primaryColor={'green'}
        />
      );
}

export default FileDropdown;