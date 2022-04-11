import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import downarrow from "./icons/down-arrow.png"

import "./DropdownCart.css"
import { CartState } from './context/Context'
import { FaShoppingCart, FaTrashAlt, FaChevronDown } from 'react-icons/fa'



const DropdownCart = () => {

    const { state: { cartArray }, dispatch } = CartState()
    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        setDropdown(!dropdown)
        console.log("changed dropdown")
        console.log(dropdown)
    }


    return (

            <div className="dropdown-cart-button" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >

                <Link to="/cart">
                    <div className="dropdown-cart-icons" onClick={() => setDropdown(false)}>
                        <FaShoppingCart className="cart-icon" />
                        <span className='quantity-number'>{cartArray.length}</span>
                        <FaChevronDown className="down-icon" />
                    </div>
                </Link>
                

                {dropdown ? (
                    <div className="dropdown-content">
                        {cartArray.length ? (

                            cartArray.map((item) => (
                                <div className='cart-item' key={item.id}>

                                    <div className="cart-item-image-box">
                                        <img src={item.image} className="cart-item-image" alt={item.title} />
                                    </div>

                                    <div className='cart-item-detail'>
                                        <div>{item.title}</div>
                                        <div className="cart-item-price">${item.price}</div>
                                    </div>
                                    <div className="cart-item-remove">
                                        <FaTrashAlt size={30} onClick={() => dispatch({ type: "removeFromCart", payload: item })} />
                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className='empty-cart'>Cart is empty!</div>
                        )}

                        
                <Link to="/cart">
                   <div className='go-to-cart'>Go to cart</div>
                </Link>

                    </div>
                ) : (
                    null
                )
                }





            </div>

    )
}

export default DropdownCart