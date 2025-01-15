import React from 'react'
import {Link} from 'react-router-dom'
import iconCart from './Pages/images/Cart.png'

const Header =()=>
{
    return(
        <header className = 'flex justify-between  items-center mb-5'>
            <Link to = "/" className = 'text-xl font-semibold'> Home </Link>
            
            <div className = 'w-10 h-10 bg-gray-100 rounded-full flex items-center relative '>
                <img src = {iconCart}  alt=" " className= 'w-6'/>
                <span className = 'w-10 h-10 bg-gray-100'> 
                </span>
            </div>
        </header>
    )
}
export default Header;