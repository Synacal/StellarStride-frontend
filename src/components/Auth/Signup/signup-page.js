import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputField from '../../Common/text-input-field';
import GreenButton from '../../Common/green-button';

function SignupForm() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSignupFormSubmit = (event) => {
        event.preventDefault();
        // Add login logic here
    };

    const handleLoginClick = () => {
        navigate('/login')
    };


    return (
        <div >
            <form onSubmit={handleSignupFormSubmit}>
                <div className="mb-4">
                    <TextInputField
                        placeholderText="Name"
                        inputValue={name}
                        setInputValue={setName}
                        handleInputChange={handleNameChange}
                    />
                </div>
                <div className="mb-4">
                    <TextInputField
                        placeholderText="Email"
                        inputValue={email}
                        setInputValue={setEmail}
                        handleInputChange={handleEmailChange}
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
                <div className="mb-4">
                    <TextInputField
                        placeholderText="Confirm Password"
                        inputValue={confirmPassword}
                        setInputValue={setConfirmPassword}
                        handleInputChange={handleConfirmPasswordChange}
                    />
                </div>
                <div className="mt-6 flex justify-end">
                    <GreenButton buttonText="Signup" />
                </div>
                <div className="mt-16 text-center">
                    <p className="text-md text-gray-400">
                        Already has an account? <span className="text-white cursor-pointer" onClick={handleLoginClick}>Login</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;