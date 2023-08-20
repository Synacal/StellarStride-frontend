import React from 'react'

function GreenButton({ buttonText }) {
    return (
        <button className='w-36 font-sans bg-gradient-to-r from-[#00474B] to-[#00585E] text-white rounded-xl px-4 py-2 cursor-pointer hover:from-[#00585E] hover:to-[#026E75]'
            style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
        >
            {buttonText}
        </button>
    );
}

export default GreenButton
