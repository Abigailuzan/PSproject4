// src/components/Toolbar.js
import React from 'react';
const Toolbar = ({ onStyleChange }) => {
    return (
        <div className="toolbar">
            <button onClick={() => onStyleChange('fontWeight', 'bold')}>
                Bold
            </button>
            <button onClick={() => onStyleChange('fontStyle', 'italic')}>
                Italic
            </button>
            <button onClick={() => onStyleChange('color', 'red')}>
                Red
            </button>
        </div>
    );
};

export default Toolbar;
