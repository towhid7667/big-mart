import React from 'react';
import HomeSlider from "@component/src/components/Home/HomeSlider";

const HomePageMain = ({data}) => {
    return (
        <div className="carousel w-full rounded-b-2xl max-w-screen-xl mx-auto">
            {data.map(banner => <HomeSlider key ={banner.id} banner = {banner}></HomeSlider>)}
        </div>
    );
};

export default HomePageMain;

