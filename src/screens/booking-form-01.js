import React, { useState } from 'react';
import '../styles/Auth.css';
import WhiteButton from '../components/Common/white-button';
import BookingStatus1 from '../assets/booking/Booking Status 1.png';
import GrayTextInputField from '../components/Common/gray-text-input';
import DropdownInputField from '../components/Common/dropdown-input-field';
import GrayButton from '../components/Common/gray-button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function BookingFirstPhase() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [address, setAddress] = useState('');
	const [destination, setDestination] = useState('');
	const [residence, setResidence] = useState('');
	const [departureDate, setDepartureDate] = useState('');
	const [travelMode, setTravelMode] = useState('');

	const handleFullNameChange = (event) => {
		setFullName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleContactNoChange = (event) => {
		setContactNo(event.target.value);
	};

	const handleAddressChange = (event) => {
		setAddress(event.target.value);
	};

	const handleDestinationChange = (event) => {
		setDestination(event.target.value);
	};

	const handleResidenceChange = (event) => {
		setResidence(event.target.value);
	};

	const handleTravelModeChange = (event) => {
		setTravelMode(event.target.value);
	};

	return (
		<div className="md:hidden w-full bg-[#1C1C1C] bg-booking-image bg-cover flex flex-col h-screen">
			<div className="flex items-center justify-center mt-20">
				<div className="relative mx-auto">
					<div
						style={{
							boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
						}}
						className="absolute -right-12 -bottom-2 w-24 py-1 bg-[#464646] flex items-center justify-center rounded-xl shadow">
						<div className="bg-[#464646] text-white">
							Book a Trip
						</div>
					</div>
				</div>
			</div>

			{/* Input Container */}
			<div className="w-5/6 mb-20 mx-auto py-8 px-4 rounded-2xl bg-[#CBCBCD] md:bg-gradient-to-b md:from-[#006B72] md:to-[#000000] flex-grow">
				<div className="flex justify-center items-center">
					<img
						src={BookingStatus1}
						alt="Status"
					/>
				</div>

				{/* Input Grid */}
				<div className="mt-6">
					<GrayTextInputField
						placeholderText={'Full Name'}
						inputValue={fullName}
						setInputValue={setFullName}
						handleInputChange={handleFullNameChange}
					/>
					<GrayTextInputField
						placeholderText={'Email'}
						inputValue={email}
						setInputValue={setEmail}
						handleInputChange={handleEmailChange}
					/>
					<GrayTextInputField
						placeholderText={'Contact No:'}
						inputValue={contactNo}
						setInputValue={setContactNo}
						handleInputChange={handleContactNoChange}
					/>
					<GrayTextInputField
						placeholderText={'Residential Address'}
						inputValue={address}
						setInputValue={setAddress}
						handleInputChange={handleAddressChange}
					/>
					<div className="mt-6"></div>
					<DropdownInputField
						placeholderText={'Destinations'}
						options={[
							'Mars',
							'Europa',
							'Moon',
							'Asteroid Belt',
							'Earth',
						]}
						selectedOption={destination}
						setSelectedOption={setDestination}
					/>
					<DropdownInputField
						placeholderText={'Residence'}
						options={[
							'Mars',
							'Europa',
							'Moon',
							'Asteroid Belt',
							'Earth',
						]}
						selectedOption={residence}
						setSelectedOption={setResidence}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Departure Date"
							value={departureDate}
							onChange={(newDate) => setDepartureDate(newDate)}
                            // style={{ width: '100%' }} 
                            // inputStyle={{ width: '100%' }} 
						/>
					</LocalizationProvider>
					<DropdownInputField
						placeholderText={'Travel Mode'}
						options={['Option 1', 'Option 2', 'Option 3']}
						selectedOption={travelMode}
						setSelectedOption={setTravelMode}
					/>
				</div>
				<div className="mt-6 text-center font-sans">Ticket Price</div>
				<div className="text-center font-sans font-bold">$$$</div>
				<div className="flex justify-center items-center mt-4">
					<GrayButton buttonText={'Next'} />
				</div>
			</div>
		</div>
	);
}

export default BookingFirstPhase;
