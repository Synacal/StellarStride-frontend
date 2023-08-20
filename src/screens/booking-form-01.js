import React from 'react';
import '../styles/Auth.css';
import WhiteButton from '../components/Common/white-button';
import BookingStatus1 from '../assets/booking/Booking Status 1.png'
import GrayTextInputField from '../components/Common/gray-text-input';
import DropdownInputField from '../components/Common/dropdown-input-field';
import GrayButton from '../components/Common/gray-button';

function BookingFirstPhase() {
    return (
        <div className="md:hidden w-full bg-[#1C1C1C] bg-booking-image bg-cover flex flex-col h-screen">
            <div className="flex items-center justify-center mt-20">
                <div className="relative mx-auto">
                    <div
                        style={{
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                        }}
                        className="absolute -right-12 -bottom-2 w-24 py-1 bg-[#464646] flex items-center justify-center rounded-xl shadow">
                        <div className='bg-[#464646] text-white'>
                            Book a Trip
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Container */}
            <div className="w-5/6 mb-20 mx-auto py-8 px-4 rounded-2xl bg-[#CBCBCD] md:bg-gradient-to-b md:from-[#006B72] md:to-[#000000] flex-grow">

                <div className='flex justify-center items-center'>
                    <img src={BookingStatus1} alt="Status" />
                </div>


                {/* Input Grid */}
                <div className="mt-6">
                    <GrayTextInputField placeholderText={'Full Name'} />
                    <GrayTextInputField placeholderText={'Email'} />
                    <GrayTextInputField placeholderText={'Contact No:'} />
                    <GrayTextInputField placeholderText={'Residential Address'} />
                    <div className='mt-6'></div>
                    <DropdownInputField placeholderText={'Destinations'} options={['Option 1', 'Option 2', 'Option 3']} />
                    <DropdownInputField placeholderText={'Residence'} options={['Option 1', 'Option 2', 'Option 3']} />
                    <DropdownInputField placeholderText={'Departure Date'} options={['Option 1', 'Option 2', 'Option 3']} />
                    <DropdownInputField placeholderText={'Travel Mode'} options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className='mt-6 text-center font-sans'>
                    Ticket Price
                </div>
                <div className='text-center font-sans font-bold'>
                    $$$
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <GrayButton buttonText={'Next'} />
                </div>

            </div>
        </div>
    );
}

export default BookingFirstPhase;


