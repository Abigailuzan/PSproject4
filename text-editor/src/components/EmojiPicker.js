import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = ({ onEmojiClick }) => {
    const [showPicker, setShowPicker] = useState(false);

    return (
        <div className="emoji-picker">
            <button onClick={() => setShowPicker(!showPicker)}>
                {showPicker ? 'Hide Emojis' : 'Show Emojis'}
            </button>
            {showPicker && <Picker onEmojiClick={onEmojiClick} />}
        </div>
    );
};

export default EmojiPicker;
