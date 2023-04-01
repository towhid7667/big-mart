import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

const Index = () => {
    const [addedItemsToCart, setAddedItemsToCart] = useState([])
    const[price , setPrice] = useState(0)

    const router = useRouter()


    useEffect(() => {
        const addedItems = JSON.parse(localStorage.getItem('Products'))
        const sum = addedItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        setAddedItemsToCart(addedItems)
        setPrice(sum)

        if(!localStorage.getItem('User')){
            router.push('/Login')
                .then()
        }

    }, [])


    const deleteItem = (id) =>{
        let items = JSON.parse(localStorage.getItem('Products'));

        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
            localStorage.setItem('Products', JSON.stringify(items));
        }
        const addedItems = JSON.parse(localStorage.getItem('Products'))
        setAddedItemsToCart(addedItems)

    }


    return (
        <div className="w-10/12 mx-auto h-screen">
            <div className="overflow-x-auto mt-10 mb-10 p-10">
                <table className="table w-10/12 mx-auto ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {addedItemsToCart.map((item, i) => <tr key={item.id}>
                        <th>{i + 1}</th>
                        <td>{item.title}</td>
                        <td ><Image className="rounded rounded-xl" width={100} height={100} src={item.image} alt={item.title}/></td>
                        <td>${item.price}</td>
                        <td><button onClick={() => deleteItem(item.id)} className="hover:bg-orange-600 px-4 py-2 text-1xl font-bold bg-orange-500 text-white rounded rounded-xl">Delete</button></td>
                    </tr>)}
                    <tr>
                        <th></th>
                        <td></td>
                        <td ></td>
                        <td> total : ${price}</td>
                        <td></td>
                    </tr>
                    </tbody>

                </table>
            </div>
            <div className="w-6/12 justify-center mx-auto flex  gap-5 flex-wrap mb-10">
                <h2 className="text-center text-4xl font-bold w-full mb-5">Ordered Items</h2>
                {addedItemsToCart.map((item, i) => <Image key={i} src={item.image} width={200} height={200}></Image>)}
            </div>
        </div>
    );
};

export default Index;