import React from 'react'
import shoppingcart from "./icons/shopping-cart.png"
import downarrow from "./icons/down-arrow.png"
import DropdownCartItem from './DropdownCartItem'
import "./DropdownCart.css"



const DropdownCart = () => {
    return (
        <div className="cart-btn">
            <a href="#"><img className="cart-icon" src={shoppingcart} /></a>

            <div className="dropdown">
                <a href="#"><img className="down-arrow" src={downarrow} /></a>
                <div className="dropdown-content">
                    <DropdownCartItem />
                </div>
            </div>
            
        </div>
    )
}

export default DropdownCart