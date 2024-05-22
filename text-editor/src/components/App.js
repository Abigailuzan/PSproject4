// src/components/App.js
import { useState } from 'react';
import React from "react";
import Keyboard from './Keyboard';
import TextArea from './TextArea';
import Toolbar from './Toolbar';
import EmojiPicker from './EmojiPicker';
import { useTranslation } from 'react-i18next';

const App = () => {
    const [text, setText] = useState('');
    const [style, setStyle] = useState({});
    const { i18n } = useTranslation();

    const handleKeyPress = (key) => {
        setText(prevText => prevText + key);
    };

    const handleStyleChange = (styleProp, value) => {
        setStyle(prevStyle => ({ ...prevStyle, [styleProp]: value }));
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then(() => {
            console.log(`Language changed to ${language}`);
        });
    };

    const handleEmojiClick = (event, emojiObject) => {
        setText(prevText => prevText + emojiObject.emoji);
    };

    return (
        <div className="app">
            <Toolbar onStyleChange={handleStyleChange} />
            <TextArea text={text} style={style} />
            <Keyboard onKeyPress={handleKeyPress} />
            <EmojiPicker onEmojiClick={handleEmojiClick} />
            <div className="language-switcher">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('he')}>עברית</button>
            </div>
        </div>
    );
};

export default App;
