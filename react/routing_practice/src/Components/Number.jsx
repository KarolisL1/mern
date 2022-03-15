import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
    const { number } = useParams();
    return (
        isNaN(number)?<h1>The word is { number }</h1>: <h1>the number is {number}</h1>
    );
}

export default Number;