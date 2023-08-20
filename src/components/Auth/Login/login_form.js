import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputField from '../../Common/text_input_field';
import GreenButton from '../../Common/green_button';

function LoginForm() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        // Add login logic here
    };

    const handleSignUpClick = () => {
        navigate('/signup')
    };


    return (
        <div >
            <form onSubmit={handleLoginFormSubmit}>
                <div className="mb-4">
                    <TextInputField
                        placeholderText="Email"
                        inputValue={username}
                        setInputValue={setUsername}
                        handleInputChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-4">
                    <TextInputField
                        placeholderText="Password"
                        inputValue={password}
                        setInputValue={setPassword}
                        handleInputChange={handlePasswordChange}
                    />
                </div>
                <div className="mt-6 flex justify-end">
                    <GreenButton buttonText="Login" />
                </div>
                <div className="mt-16 text-center">
                    <p className="text-md text-gray-400">
                        Don’t have an account? <span className="text-white cursor-pointer" onClick={handleSignUpClick}>Sign up</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;