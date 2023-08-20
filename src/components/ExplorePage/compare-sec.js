import React, { useState } from 'react';

const CompareSection = () => {
    const [destination1, setDestination1] = useState('Destination 1');
    const [destination2, setDestination2] = useState('Destination 2');

    const handleDestination1Change = (e) => {
        setDestination1(e.target.value);
    };

    const handleDestination2Change = (e) => {
        setDestination2(e.target.value);
    };

    return (
        <div className="bg-white py-10 px-4 font-sans">
            <p className='text-center text-[#282828] font-bold mb-4'>Compare Two Destinations</p>

            {/* Destination Selection Dropdowns */}
            <div className="flex justify-center space-x-2 mb-4">
                <div className="relative">
                    <select
                        value={destination1}
                        onChange={handleDestination1Change}
                        className="block appearance-none bg-gray-200 border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="Destination 1">Destination 1</option>
                        <option value="Destination 3">Destination 3</option>
                        <option value="Destination 5">Destination 5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        value={destination2}
                        onChange={handleDestination2Change}
                        className="block appearance-none bg-gray-200 border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="Destination 2">Destination 2</option>
                        <option value="Destination 4">Destination 4</option>
                        <option value="Destination 6">Destination 6</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Comparison Container */}
            <div className="flex space-x-2 text-center">
                {/* Destination 1 */}
                <div className="w-1/2 px-4 bg-[#979797] bg-opacity-75 p-2 rounded-lg text-[#343434] shadow-md">
                    {/* Content for Destination 1 */}
                    <div className="text-xs text-gray-600">
                        <p className=" mb-2">
                            <span className="font-semibold">Distance from Earth</span><br />
                            364.6 million km
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Approximate traveling time</span><br />
                            45 days
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Express Shuttle</span><br />
                            Not Available
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Shuttle Departure</span><br />
                            Every Saturday
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Travel Modes</span><br />
                            Economy / Standard / Premium
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Approximate Budget</span><br />
                            $$
                        </p>
                    </div>
                </div>

                {/* Destination 2 */}
                <div className="w-1/2 px-4 bg-[#979797] bg-opacity-75 p-2 rounded-lg text-[#343434] shadow-md">
                    {/* Content for Destination 2 */}
                    <div className="text-xs text-gray-600">
                        <p className=" mb-2">
                            <span className="font-semibold">Distance from Earth</span><br />
                            364.6 million km
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Approximate traveling time</span><br />
                            45 days
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Express Shuttle</span><br />
                            Not Available
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Shuttle Departure</span><br />
                            Every Saturday
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Travel Modes</span><br />
                            Economy / Standard / Premium
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Approximate Budget</span><br />
                            $$
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareSection;
