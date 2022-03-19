import React from 'react'
import dot from "./icons/dot.png"
import loupe from "./icons/loupe.png"
import close from "./icons/close.png"
import DropdownCart from './DropdownCart'

import { Link } from 'react-router-dom'


import "./Header.css"

const Header = () => {
    return (

        <div className="header">
            <a href="#"><img className="dot" src={dot} /></a>
            

               
            
            <ul class="header-main">
                
                <li> 
                    <div className="search-wrapper">
                        <img class="search-icon" src={loupe}/>
                        <input type="text" placeholder="Search..." className="search-bar" />
                        <img class="clear-icon" src={close}/>
                    </div>
                </li>
                <li className="cart-btn">
                    <DropdownCart/>
                    
                </li>

                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </div>
    )
}

export default Header