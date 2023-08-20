import React from 'react';
import '../styles/Auth.css';
import BookingStatus2 from '../assets/booking/Booking Status 2.png'
import GrayTextInputField from '../components/Common/gray_text_input';
import DropdownInputField from '../components/Common/dropdown_input_field';
import GrayButton from '../components/Common/gray_button';
import FileUploadInputField from '../components/Common/file_uploader_input';

function BookingSecondPhase() {
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
            <div className="w-5/6 mb-20 mx-auto pt-8 px-4 rounded-2xl bg-[#CBCBCD] md:bg-gradient-to-b md:from-[#006B72] md:to-[#000000] flex-grow">

                <div className='flex justify-center items-center'>
                    <img src={BookingStatus2} alt="Status" />
                </div>


                {/* Input Grid */}
                <div className="mt-6">
                    <FileUploadInputField placeholderText={'Insurance policy certification'} />
                    <FileUploadInputField placeholderText={'SpacePass Documentation'} />
                    <FileUploadInputField placeholderText={'Passport Documentation'} />
                    <FileUploadInputField placeholderText={'National ID Documentation'} />

                </div>

                <div className='flex justify-center items-center mt-8'>
                    <GrayButton buttonText={'Next'} />
                </div>

            </div>
        </div>
    );
}

export default BookingSecondPhase;


