import React from 'react';
import GrayButton from '../Common/gray_button';

function DestinationCard({ imageSrc, name, temperature, temperatureIconSrc, distance, travelTime }) {
    return (
        <div className="w-75 font-sans bg-[#979797] bg-opacity-75 mx-auto my-4 p-4 rounded-2xl shadow-lg overflow-hidden">
            <img
                src={imageSrc}
                alt="Destination"
                className="w-full "
            />
            <div className="">
                <div className="flex items-center justify-between mx-4">
                    <div className="text-xl font-semibold mb-2">{name}</div>
                    <div className="flex items-center">
                        <span className="text-xl mr-1">{temperature}</span>
                        <img
                            src={temperatureIconSrc}
                            alt="Temperature Icon"
                            className="w-3 h-3"
                        />
                    </div>
                </div>


                <div className="text-center text-xs">
                    <div className="mb-1 ">
                        <span className="font-semibold ">Distance from Earth:</span> {distance}
                    </div>
                    <div>
                        <span className="font-semibold">Approximate traveling time:</span> {travelTime}
                    </div>
                </div>
                <div className="flex items-center justify-center"> {/* Add this container */}
                    <GrayButton buttonText={"Explore"} />
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
