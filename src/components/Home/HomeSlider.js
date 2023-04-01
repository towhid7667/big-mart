import React from 'react';

const HomeSlider = ({banner}) => {
    return (

            <div key={banner.id} id={`slide${banner.id}`} className="carousel-item relative w-full bg-gradient-to-r from-orange-700 to-blue-500 lg:h-[600px]">
                <img alt='' src={banner.image} className="w-full opacity-70  " />

                <div className="absolute flex flex-col justify-between transform -translate-x-1/2 -translate-y-1/2  left-1/2  top-1/2">
                    <h1 className='text-[30px] lg:text-[100px] md:text-[70px] font-extrabold text-white text-center leading-tight tracking-widest'>Big Mart</h1>
                    <p className='text-[10px] lg:text-xl md:text-1xl text-center text-white'>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${banner.prev}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${banner.next}`} className="btn btn-circle">❯</a>
                </div>
            </div>

    );
};

export default HomeSlider;

