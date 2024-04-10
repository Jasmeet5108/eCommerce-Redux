import React from 'react'
import { Link } from 'react-router-dom'


const SideMenu = (props) => {

    const { menu, toggle } = props;

    return (
        <div id='sideMenu' className={`bg-gray-900 text-white ${menu ? "mt-0" : "mt-[-138px]"} py-4 transition-all duration-300`}>
            <ul className='flex flex-col items-center justify-center gap-4'>
                <li onClick={toggle}>
                    <Link
                        to="/"
                        className='flex gap-2'
                        aria-current="page"
                    >
                        Home
                        <img src="/home.svg" alt="home" />
                    </Link>
                </li>
                <li onClick={toggle}>
                    <Link
                        to="/products"
                        className='flex gap-2'
                    >
                        Products
                        <img src="/store.svg" alt="cart" />
                    </Link>
                </li>
                <li onClick={toggle}>
                    <Link
                        to="/cart"
                        className='flex gap-2'
                    >
                        Cart
                        <img src="/cart.svg" alt="cart" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu