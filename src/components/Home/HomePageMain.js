import React from 'react';
import HomeSlider from "@component/src/components/Home/HomeSlider";
import Product from "@component/src/components/Products/Product";

const HomePageMain = ({data , productList}) => {
    return (
        <>
        <div className="carousel w-full rounded-b-2xl max-w-screen-xl mx-auto">
            {data.map(banner => <HomeSlider key ={banner.id} banner = {banner}></HomeSlider>)}
        </div>

        <div className="flex gap-5 flex-wrap m-10 justify-center  items-center">
            <h2 className="text-center text-4xl font-bold w-full">Products</h2>
            {productList.map(product => <Product key={product.id} product={product}></Product>)}
        </div>

            <div className="hero w-10/12 mx-auto lg:p-10 p-4 rounded rounded-xl m-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Why us?</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageMain;

