import React from 'react';

const Product = ({product}) => {
    return (
        <div className="card lg:w-96 md:w-4/12 w-96 bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description.slice(0, 100)}</p>

                <div className="card-actions justify-end">
                    <button className="px-4 py-2 rounded rounded-xl text-white font-bold bg-orange-500">Details</button>
                    <button className="px-4 py-2 rounded rounded-xl text-white font-bold bg-orange-500">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Product;