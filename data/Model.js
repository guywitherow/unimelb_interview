import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodePng } from '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';

export async function processImage(imageAsset) {
    await tf.ready();

    const modelPath = require('./jsmodel4/model.json');
    const modelWeightsPath = require('./jsmodel4/group1-shard1of1.bin');
    const model = await tf.loadGraphModel(bundleResourceIO(modelPath, modelWeightsPath));

    const { uri } = await ImageManipulator.manipulateAsync(
        imageAsset.uri,
        [],
        { format: ImageManipulator.SaveFormat.PNG }
    );

    const imageRaw = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
    const imageBuffer = tf.util.encodeString(imageRaw, 'base64');

    console.log(imageBuffer);

    const imageTensor = decodePng(imageBuffer);

    const normalizedTensor = imageTensor.div(255);

    const processedTensor = model.predict(normalizedTensor);

    const processedArray = await processedTensor.array();

    return processedArray;
}

export default processImage;