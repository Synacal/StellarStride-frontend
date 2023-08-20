import React from 'react';
import '../styles/Auth.css';
import SignupForm from '../components/Auth/Signup/signup-page';

function SignupPage() {
    return (
        <div className="flex h-screen">
            {/* Desktop View */}
            <div className="hidden md:flex w-1/2 bg-cover bg-login-image items-center justify-center">
                <div className='text-center'>
                    <div className='text-white font-sans text-4xl font-extrabold'>
                        STELLARSTRIDE
                    </div>
                    <div className='text-white font-sans text-xl'>
                        Discover. Ascend. Unveil.
                    </div>
                </div>

            </div>


            <div className="hidden md:flex md:w-1/2 bg-[#656565] px-8 justify-center items-center h-screen">
                <div className='w-full'>
                    <h2 className="text-2xl font-sans mb-12 text-white text-center">Say Hello To Space!</h2>
                    <SignupForm />
                </div>
            </div>


            {/* Mobile View */}
            <div className="md:hidden w-full bg-login-image bg-cover bg-opacity-70 flex flex-col h-screen">
                <div className="w-full text-center my-20">
                    <div className='text-white font-sans text-4xl font-extrabold'>
                        STELLARSTRIDE
                    </div>
                    <div className='text-white font-sans text-xl'>
                        Discover. Ascend. Unveil.
                    </div>
                </div>

                <div className="h-3/4 w-full p-8 rounded-2xl bg-gradient-to-b from-[#006B72] to-[rgba(0, 0, 0, 0.15)] md:bg-gradient-to-b md:from-[#006B72] md:to-[#000000] flex-grow">
                    <h2 className="text-2xl font-sans mb-12 text-white text-center">Say Hello To Space!</h2>
                    <SignupForm />
                </div>
            </div>

        </div>
    );
}

export default SignupPage;
