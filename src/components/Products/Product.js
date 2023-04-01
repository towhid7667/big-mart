import React from 'react';
import Link from "next/link";

const Product = ({product}) => {

    const handleAddToCart = () => {
        const product = {
            id : data.id,
            title : data.title,
            image : data.image,
            price : data.price

        }
    }
    return (
        <div className="card lg:w-96 md:w-4/12 w-96 bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                    <div className="badge badge-secondary">{product.price}</div>
                </h2>
                <p>{product.description.slice(0, 100)}</p>

                <div className="card-actions justify-end">
                    <Link href={`/Products/${product.title}/${product.id.toString()}`} className="px-4 py-2 rounded rounded-xl text-white font-bold bg-orange-500">Details</Link>
                    <button onClick={() => handleAddToCart()} className="px-4 py-2 rounded rounded-xl text-white font-bold bg-orange-500">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Product;