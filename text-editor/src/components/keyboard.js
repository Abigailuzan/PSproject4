// src/components/Keyboard.js
import React from 'react';

export const Keyboard = ({ onKeyPress }) => {
    const keys = ['A', 'B', 'C', '1', '2', '3', '!', '@', '#'];
    const languages = ['English', 'Hebrew', 'Emoji'];

    return (
        <div className="keyboard">
            {keys.map(key => (
                <button key={key} onClick={() => onKeyPress(key)}>{key}</button>
            ))}
            {languages.map(lang => (
                <button key={lang} onClick={() => onKeyPress(lang)}>{lang}</button>
            ))}
        </div>
    );
};

export default Keyboard;