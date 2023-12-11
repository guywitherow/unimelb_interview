import React, { useEffect, useState } from 'react';
import RNFS from 'react-native-fs';

const SongRead = () => {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    const readFolders = async () => {
      try {
        const rootPath = RNFS.DocumentDirectoryPath; // Change this to your desired root folder
        const folders = await RNFS.readDir(rootPath);

        const folderPromises = folders.map(async (folder) => {
          if (folder.isDirectory()) {
            const files = await RNFS.readDir(folder.path);

            const fileData = files.map((file) => ({
              label: file.name,
              value: file.name,
            }));

            return {
              title: folder.name,
              data: fileData,
            };
          }
          return null;
        });

        const resolvedFolders = await Promise.all(folderPromises);
        setFolderData(resolvedFolders.filter(Boolean));
      } catch (error) {
        console.error('Error reading folders:', error);
      }
    };

    readFolders();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <View>
      {folderData.map((folder, index) => (
        <View key={index}>
          <Text>{`Folder: ${folder.title}`}</Text>
          {folder.data.map((file, fileIndex) => (
            <Text key={fileIndex}>{`File: ${file.label}`}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default SongRead;
