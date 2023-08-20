import React, { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const DropdownInputField = ({ placeholderText, options, selectedOption, setSelectedOption }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const inputStyle = {
        backgroundColor: '#656565',
        padding: '8px',
        paddingLeft: '30px',
        borderRadius: '14px',
        border: '1px solid #ccc',
        width: '100%',
        marginTop: '8px',
        cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
    };

    const dropdownStyle = {
        display: isDropdownOpen ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0 0 14px 14px',
        width: '100%',
        zIndex: 1,
    };

    const iconStyle = {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'white'
    };

    return (
        <div style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder={placeholderText}
                style={inputStyle}
                value={selectedOption}
                onClick={toggleDropdown}
                readOnly // Make the input read-only to prevent manual text input
            />
            <ArrowDropDownOutlinedIcon style={iconStyle} onClick={toggleDropdown} />
            <div style={dropdownStyle}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        style={{
                            padding: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownInputField;
