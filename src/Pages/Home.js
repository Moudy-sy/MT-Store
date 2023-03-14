import React, { useState } from 'react';
import Slider from '../MyComponents/SmallComponents/Slider';
import './Home.css';
import { FaUser } from 'react-icons/fa';




const products = [
    { id: 1, name: 'iPhone 14 Pro 512GB', image: 'https://media.croma.com/image/upload/v1662655041/Croma%20Assets/Communication/Mobiles/Images/261980_o48qqq.png', price: `£1299` },
    { id: 2, name: 'Apple TV 4K', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164', price: `£149.99` },
    { id: 3, name: '3 in 1 Wireless charger', image: 'https://www.belkin.com/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw2f0b5517/images/hi-res/a/105061946_WIZ001xx-BPK_BoostCharge_3-1WirelessChargingDock_Pedastal_WEB.png', price: `£49.99` },
    { id: 4, name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000', price: `£34.99` },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150x150', price: `£34.99` },
    { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 8, name: 'Product 8', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 9, name: 'Product 9', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 10, name: 'Product 10', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 11, name: 'Product 11', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 12, name: 'Product 12', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 13, name: 'Product 6', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 14, name: 'Product 7', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 15, name: 'Product 8', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 16, name: 'Product 9', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 17, name: 'Product 10', image: 'https://via.placeholder.com/150x150', price: `£1200` },
    { id: 18, name: 'Product 11', image: 'https://via.placeholder.com/150x150', price: `£1200` },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const productsToShow = products.slice(currentSlide * 6, (currentSlide * 6) + 6);

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? Math.floor(products.length / 6) : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === Math.floor(products.length / 6) ? 0 : currentSlide + 1);
    };

    return (
        <div>
            <Slider />
            <div class="card-container top">
                <div class="cardC">
                    <div class="card-body">
                        <FaUser />
                        <a>Sign In</a>
                    </div>
                </div>
                <div class="cardC">
                    <div class="card-body">
                        <FaUser />
                        <a>Sign In</a>
                    </div>
                </div>
                <div class="cardC">
                    <div class="card-body">
                        <h2>Top Deal</h2>
                        <img src='https://m.media-amazon.com/images/I/51fzL8HTL0L._AC_SY460_.jpg' />
                        <a>See more</a>
                    </div>
                </div>
                <div class="cardC">
                    <div class="card-body">
                        <FaUser />
                        <span>User</span>
                        <p class="card-text">Sign in for your best experience</p>
                        <button class="btn btn-primary">Sign In</button>
                    </div>
                </div>

            </div>
            <div className="home-container card-container">
                <h2>Product Deals</h2>
                <div className='card-container'>
                    {productsToShow.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                        </div>
                    ))}
                </div>
                <button onClick={goToPreviousSlide}>&#8249;</button>
                <button onClick={goToNextSlide}>&#8250;</button>
            </div>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
            </div>
            <div class="card-container">
                <div class="cardB"></div>
                <div class="cardB"></div>
                <div class="cardB"></div>
            </div>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </div>
    );
};

export default Home;
