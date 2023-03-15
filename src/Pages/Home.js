import React, { useState } from 'react';
import Slider from '../MyComponents/SmallComponents/Slider';
import './Home.css';
import { FaUser } from 'react-icons/fa';
import User from './User';





const products = [
    { id: 1, name: 'iPhone 14 Pro 512GB', image: 'https://media.croma.com/image/upload/v1662655041/Croma%20Assets/Communication/Mobiles/Images/261980_o48qqq.png', price: `£1299` },
    { id: 2, name: 'Apple TV 4K', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164', price: `£149.99` },
    { id: 3, name: '3 in 1 Wireless charger', image: 'https://www.belkin.com/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw2f0b5517/images/hi-res/a/105061946_WIZ001xx-BPK_BoostCharge_3-1WirelessChargingDock_Pedastal_WEB.png', price: `£49.99` },
    { id: 4, name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000', price: `£34.99` },
    { id: 5, name: 'MacBook Pro M1 TouchBar', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13touchbar-performance-silver-gallery-2020_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1593570056000', price: `£34.99` },
    { id: 6, name: 'iMac 27 inch 265GB SSD & 16GB Ram', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-2017-imac-215-gallery?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1499114976977', price: `£1600` },
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
    const [showUser, setShowUser] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const productsToShow = products.slice(currentSlide * 6, (currentSlide * 6) + 6);

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? Math.floor(products.length / 6) : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === Math.floor(products.length / 6) ? 0 : currentSlide + 1);
    };

    const handleSignInClick = () => {
        setShowUser(true);
        const message = document.querySelector('.card-text');
        message.style.display = 'none';
        const button = document.querySelector('.user-login button');
        button.style.display = 'none';

    };




    return (
        <div>
            <Slider />
            <div class="card-container top">
                <div class="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZTA2YjQwMmUt/ZTA2YjQwMmUt-NzM5MDdjMTIt-w758._SY608_CB594723446_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div class="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/rudolph/Action-Nose-DesktopCard-758x608_2x._SY608_CB615428916_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div class="cardC ">
                    <div class="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div class="cardC">
                    <div class="card-body user-login">
                        <spam className="icon"><FaUser /></spam>
                        <a>Good Morning`</a>
                        <p class="card-text">Sign in for your best experience</p>
                        <button onClick={handleSignInClick} class="btn btn-primary">Sign In</button>
                        {showUser && <User />}
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
                <div class="card-2 card">
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Gifting._CB614272559_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Apparel._CB614272556_.jpgv' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Home._CB614272559_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Jewelry._CB612802621_.jpg' />
                </div>
                <div class="card-2 card">
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_BEAUTY_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_TECH_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_HOME_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_CLOTHING_400x400._CB647222103_.jpg' />
                </div>
            </div>
            <div class="card-container">
                <div class="cardC">
                    <div className="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div class="cardC">
                    <div className="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div class="cardC ">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/IMDbTV/Marketing/Gateway/NeighboursLibraryLaunchFeb/NeighboursS27_DesktopImageCard_758x608_newKA_91257_en-GB._SY608_CB612804707_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div class="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/books/deals/Calendar23/GW_758x608_UK._SY608_CB614473538_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card-container">
                <div class="cardB"></div>
                <div class="cardB"></div>
                <div class="cardB"></div>
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
        </div>
    );
};


export default Home;
