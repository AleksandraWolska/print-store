import React from 'react'
import dot from "./icons/dot.png"
import loupe from "./icons/loupe.png"
import close from "./icons/close.png"
import DropdownCart from './DropdownCart'

import { Link } from 'react-router-dom'


import "./Header.css"
import { CartState } from './context/Context'

const Header = () => {

    const {
        state: { cartState },
        dispatch,
        sortDispatch
    } = CartState()



    return (

        <div className="header">

            <Link to="/">
                <img className="dot" src={dot} />
            </Link>
            
            

               
            
            <ul className="header-main">
                
                <li> 
                    <div className="search-wrapper">
                        <img className="search-icon" src={loupe}/>
                        <input 
                        onFocus= {(ev) => { ev.target.value = ""}}
                        onChange={ev => {
                            sortDispatch({
                                type: "filterBySearch",
                                payload: ev.target.value
                            })
                        }}
                        type="text" 
                        placeholder="Search..." 
                        className="search-bar" 
                        />
                        <img className="clear-icon" src={close}/>
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