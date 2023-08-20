import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';

function FIlterSection() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    return (
        <div className='w-full'>
            <div
                style={{
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
                }}
                className="relative">
                <button
                    onClick={toggleFilter}
                    className="flex items-center w-full mx-auto text-white bg-[#464646] px-4 py-1 mt-2 rounded-xl hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
                >
                    <span>Filter</span>
                    <TuneIcon style={{
                        marginLeft: 'auto',
                        width: '20px', height: '20px'
                    }} />
                </button>
                {isFilterOpen && (
                    <div

                        className="absolute top-10 right-0 mt-2 text-white p-2 bg-[#666666] rounded-lg shadow-lg">
                        <div className="mb-2">Sort By:</div>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Price - Lowest
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Price - Highest
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Climate - Healthy
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover-bg-gray-100">
                            Climate - Hottest
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Climate - Coolest
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Planet - Closest
                        </button>
                        <button className="text-left block w-full py-2 px-4 hover:bg-gray-100">
                            Planet - Far
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FIlterSection
