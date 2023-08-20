import React, { useState, useRef } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadInputField = ({ placeholderText }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file, e.g., set it in state or perform an upload
            setFile(selectedFile);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <TextField
            placeholder={placeholderText}
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .pdf" // Define the accepted file types
                            style={{ display: 'none' }} // Hide the actual file input
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                        <IconButton
                            component="span"
                            color="white"
                            aria-label="upload file"
                            onClick={handleUploadClick} // Trigger the file input click
                        >
                            <CloudUploadIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                style: {
                    backgroundColor: '#656565',
                    // padding: '8px',
                    paddingLeft: '8px',
                    borderRadius: '14px',
                    border: '1px solid #ccc',
                    marginTop: '8px',
                },
            }}
            InputLabelProps={{
                shrink: false,
            }}
        />
    );
};

export default FileUploadInputField;

