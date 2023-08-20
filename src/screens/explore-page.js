import React from 'react';
import '../styles/Auth.css';
import GrayButton from '../components/Common/gray_button';
import FIlterSection from '../components/ExplorePage/filter-section';
import DestinationCard from '../components/ExplorePage/destination-card';
import VenusImg from '../assets/explore/venus1.png'
import VenusIcon from '../assets/explore/VIcon1.png'
import Carousel from '../components/ExplorePage/carousel';
import CompareSection from '../components/ExplorePage/compare-sec';

function ExplorePage() {
    return (
        <div className='md:hidden w-full bg-[#1C1C1C] bg-booking-image bg-cover flex flex-col h-screen '>
            <div className='px-8'>
                <div className='flex mx-auto space-x-8 mb-2'>
                    <button className='my-2 w-full font-sans bg-[#4D4D4D] text-white rounded-2xl px-4 py-1 cursor-pointer hover:from-[#656565] hover:to-[#656565] hover:text-white'
                        style={{
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        Book a Trip
                    </button>
                    <FIlterSection />
                </div>

                <Carousel />

            </div>
            <CompareSection />
        </div >

    );
}

export default ExplorePage;

