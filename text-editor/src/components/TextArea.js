// src/components/TextArea.js
import React from 'react';

const TextArea = ({ text, style }) => {
    return (
        <div className="text-area" style={style}>
            {text}
        </div>
    );
};

export default TextArea;
