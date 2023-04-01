import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Header = () => {
    const[items, setItems] = useState([])


    useEffect(() => {

            const itemList = JSON.parse(localStorage.getItem('Products'))
            console.log(itemList)
            setItems(itemList)



    }, [ ])


    return (
        <header className="navbar bg-slate-100 drop-shadow-md sticky top-0 z-50">
            <div className=" flex justify-between w-11/12 lg:w-10/12 md:w-10/12 mx-auto">
                <div className=" ">
                    <Link href='/' className=" text-2xl text-black font-bold hover:bg-gray-200 p-2 rounded rounded-xl ">Big<span className="text-white text-2xl font-bold bg-orange-500  p-2 rounded rounded-xl">Mart</span></Link>
                </div>
                <div className=" flex items-center">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{items===null? 0 : items.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{items?.length} Items</span>

                                <div className="card-actions">
                                    <Link href='/Cart' passHref className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;