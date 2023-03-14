import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
    { imageUrl: 'https://m.media-amazon.com/images/I/617r917LHXL._SX3000_.jpg' },
    { imageUrl: 'https://m.media-amazon.com/images/I/61J05xyMEML._SX3000_.jpg' },
    { imageUrl: 'https://m.media-amazon.com/images/I/61cuw6hV8EL._SX3000_.jpg' },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const sliderWidth = `${slides.length * 100}%`;

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider" style={{ '--slider-width': sliderWidth }}>
            <div className="slider-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slider-image" key={index}>
                        <img src={slide.imageUrl} alt={slide.caption}></img>
                        <div className="slider-caption">{slide.caption}</div>
                        <div className='slidereffect'></div>
                    </div>
                ))}
            </div>

            <button className="slider-button previous" onClick={goToPreviousSlide}>&#8249;</button>
            <button className="slider-button next" onClick={goToNextSlide}>&#8250;</button>
        </div>
    );
};

export default Slider;


