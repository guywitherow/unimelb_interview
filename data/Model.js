import React from 'react';
import tflite, { useTensorflowModel } from 'react-native-fast-tflite';

const ModelProcessing = ({ songName }) => {

    const imageModel = useTensorflowModel(require('./GTZAN_model.tflite'));

    const imageName = songName.split('.').join('');
    const genre = songName.split('.')[0];

    const imagePath = `assets/songs/spectrographs/${genre}/${imageName}.png`;

    // Prepare the image for processing on the tflite model
    const prepareImage = async (imagePath) => {
        // Load the spectrograph image as a TensorImage from the tflite library
        const tensorImage = new tflite.TensorImage(imagePath);

        // Transform the image for processing on the tflite model
        // ...
    };

    // Import the tflite model and have it ready to use
    const model = new tflite.Model();
    model.loadModel(tfliteModel);

    return (
        <div>
            {/* Render the spectrograph image */}
            <img src={imagePath} alt="Spectrograph" />
        </div>
    );
};

export default ModelProcessing;
