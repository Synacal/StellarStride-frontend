import React, { useState } from 'react';

const GrayTextInputField = ({ placeholderText, inputValue, setInputValue, handleInputChange }) => {
    const inputStyle = {
        backgroundColor: '#656565',
        padding: '8px',
        paddingLeft: '30px',
        borderRadius: '14px',
        border: '1px solid #ccc',
        width: '100%',
        marginTop: '8px',
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

export default GrayTextInputField;