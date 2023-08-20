import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DestinationCard from './destination-card';
import VenusImg from '../../assets/explore/venus1.png'
import VenusIcon from '../../assets/explore/VIcon1.png'

const Carousel = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        focusOnSelect: true,
    };

    return (
        <Slider {...settings}>
            {/* Repeat the DestinationCard component with your data 9 times */}
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            <DestinationCard
                imageSrc={VenusImg}
                name="Venus"
                temperature="25°C"
                temperatureIconSrc={VenusIcon}
                distance="100,000 miles"
                travelTime="5 days"
            />
            {/* Repeat for other cards */}
        </Slider>
    );
};

export default Carousel;
