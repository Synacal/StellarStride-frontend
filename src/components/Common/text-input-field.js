import React, { useState } from 'react';

const TextInputField = ({ placeholderText, inputValue, setInputValue, handleInputChange }) => {
    const inputStyle = {
        backgroundColor: 'rgba(217, 217, 217, 0.15)',
        padding: '8px',
        paddingLeft: '30px',
        borderRadius: '14px',
        border: '1px solid #ccc',
        width: '100%',
    };

    return (
        <input
            type="text"
            placeholder={placeholderText}
            style={inputStyle}
            value={inputValue}
            onChange={handleInputChange}
        />
    );
};

export default TextInputField;
