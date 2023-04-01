import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Index = () => {
    const [user, setUser] = useState({})
    const [phone, setPhone] = useState(0)
    const [password, setPassword] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("User"))
        setUser(user)
    }, [])


    return (
        <div className="hero min-h-screen bg-base-200 bg-[url('https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input onChange={(e) => setPhone(parseInt(e.target.value))} type="number" placeholder="+880" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onChange={(e) => setPassword(e.target.value) } placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="/Register" className="label-text-alt link link-hover">Don't Have account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={user?.userPhone === phone && user?.userPassword === password? false : true} className="py-2 rounded rounded-xl text-white  font-bold text-xl bg-orange-500">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;