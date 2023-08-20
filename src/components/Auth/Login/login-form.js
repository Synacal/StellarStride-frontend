import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInputField from '../../Common/text-input-field';
import GreenButton from '../../Common/green-button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const mySwal = withReactContent(Swal);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLoginFormSubmit = async (event) => {
		event?.preventDefault();

		const user = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				'http://localhost:8080/auth/login',
				user
			);

			if (200 == response.status) {
				localStorage.setItem('token', response.data.token);
				mySwal
					.fire({
						title: <p>Logged in successfully</p>,
						icon: 'success',
					})
					.then(() => {
						navigate('/profile');
					});
			}
		} catch (err) {
			mySwal.fire({
				title: <p>Login failed!</p>,
				icon: 'error',
			});
		}
	};

	const handleSignUpClick = () => {
		navigate('/signup');
	};

	return (
		<div>
			<form onSubmit={handleLoginFormSubmit}>
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
				<div className="mt-6 flex justify-end">
					<GreenButton buttonText="Login" />
				</div>
				<div className="mt-16 text-center">
					<p className="text-md text-gray-400">
						Don’t have an account?{' '}
						<span
							className="text-white cursor-pointer"
							onClick={handleSignUpClick}>
							Sign up
						</span>
					</p>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
