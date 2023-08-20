import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../styles/Auth.css';
import WhiteButton from '../components/Common/white_button';
import AvatarImg from '../assets/profile/avatar.png'

function ProfilePage() {
    return (
        <div className="md:hidden w-full bg-login-image bg-cover bg-opacity-70 flex flex-col h-screen">
            {/* Avatar and User Information */}
            <div className="flex items-center justify-start px-8 mt-20">
                <div className="relative w-24 h-24 mr-4">
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white flex items-center justify-center">
                        <Avatar
                            alt="User Avatar"
                            src={AvatarImg}
                            sx={{ width: '100%', height: '95%' }}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-4 pt-8">
                    <h1 className="text-xl font-bold text-white">John Doe</h1>
                    <p className='text-white'>johndoe@example.com</p>
                </div>
            </div>

            {/* Buttons Container */}
            <div className="h-3/4 w-full p-8 rounded-2xl bg-gradient-to-b from-[#D9D9D9] to-[rgba(0, 0, 0, 0.15)] md:bg-gradient-to-b md:from-[#006B72] md:to-[#000000] flex-grow">
                {/* Button Grid */}
                <div className="">
                    <WhiteButton buttonText={'Book a Trip'} />
                    <WhiteButton buttonText={'My Tickets'} />
                    <WhiteButton buttonText={'Edit Profile'} />
                    <WhiteButton buttonText={'Security and Privacy'} />
                    <WhiteButton buttonText={'Manage Notifications'} />
                    <div className='mt-36'>
                        <WhiteButton buttonText={'Logout'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;


