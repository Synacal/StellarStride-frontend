import React from 'react'

function GrayButton({ buttonText }) {
    return (
        <button className='my-2 w-32 font-sans bg-[#4D4D4D] text-white rounded-2xl px-4 py-1 cursor-pointer hover:from-[#656565] hover:to-[#656565] hover:text-white'
            style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
        >
            {buttonText}
        </button>
    );
}

export default GrayButton
