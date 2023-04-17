import React, { useState, useEffect } from 'react';
import Slider from '../MyComponents/SmallComponents/Slider';
import './Home.css';
import { FaUser } from 'react-icons/fa';
import User from './User';
import db from '../Data/firebase';

const Home = () => {
    const [showUser, setShowUser] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsCollection = db.collection('Products');

        productsCollection.get().then((querySnapshot) => {
            const productsData = [];
            querySnapshot.forEach((doc) => {
                productsData.push(doc.data());
            });
            setProducts(productsData);
        });
    }, []);

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
            <div className="card-container top">
                <div className="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZTA2YjQwMmUt/ZTA2YjQwMmUt-NzM5MDdjMTIt-w758._SY608_CB594723446_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div className="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/rudolph/Action-Nose-DesktopCard-758x608_2x._SY608_CB615428916_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div className="cardC ">
                    <div className="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' />
                        <div className='under-card'>
                            {/* <h2>Top Deal</h2>
                            <a>See more</a> */}
                        </div>
                    </div>
                </div>
                <div className="cardC">
                    <div className="card-body user-login">
                        <span className="icon"><FaUser /></span>
                        <a>Good Morning`</a>
                        <p className="card-text">Sign in for your best experience</p>
                        <button onClick={handleSignInClick} className="btn btn-primary">Sign In</button>
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
            <div className="card-container">
                <div className="card-2 card">
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Gifting._CB614272559_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Apparel._CB614272556_.jpgv' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Home._CB614272559_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/ACS/Made_in_Italy/2023/GWs/March/bubble_shoveler/UK_BUBBLE_SHOVELER_400x400_MII_Jewelry._CB612802621_.jpg' />
                </div>
                <div className="card-2 card">
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_BEAUTY_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_TECH_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_HOME_400x400._CB647222103_.jpg' />
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/amazonlaunchpad/UK/Gateway/2022/2-Feb/BUBBLER/BUBBLE_CLOTHING_400x400._CB647222103_.jpg' />
                </div>
            </div>
            <div className="card-container">
                <div className="cardC">
                    <div className="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div className="cardC">
                    <div className="card-body">
                        <img src='https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div className="cardC ">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/IMDbTV/Marketing/Gateway/NeighboursLibraryLaunchFeb/NeighboursS27_DesktopImageCard_758x608_newKA_91257_en-GB._SY608_CB612804707_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>
                <div className="cardC">
                    <div className="card-body">
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/books/deals/Calendar23/GW_758x608_UK._SY608_CB614473538_.jpg' />
                        <div className='under-card'>
                            <h2>Top Deal</h2>
                            <a>See more</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-container">
                <div className="cardB"></div>
                <div className="cardB"></div>
                <div className="cardB"></div>
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
            <div className="card-container">
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    );
};


export default Home;
