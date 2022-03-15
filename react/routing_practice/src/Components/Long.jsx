import React from 'react';
import { useParams } from 'react-router-dom';

const Long = () => {

    const { word, text, background } = useParams();
    return (
        <h1 style={{ backgroundColor: background, color: text }}>The word is {word}.</h1>
    );
}

export default Long;