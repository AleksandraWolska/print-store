import React, { useState } from 'react'
import loupe from "./icons/loupe.png"
import close from "./icons/close.png"
import DropdownCart from './DropdownCart'

import { FaBars, FaCircle, FaSearch } from "react-icons/fa"

import { Link } from 'react-router-dom'
import "./Header.css"
import { CartState } from './context/Context'

const Header = () => {

    const {
        sortDispatch
    } = CartState()

    const [showSearch, setShowSearch] = useState(false)
    const [showMenu, setShowMenu] = useState(false)




    return (

        <div className="header">

            <div className="header-contents">
                <Link to="/">
                    <div className='dot'>
                        <FaCircle style={{ color: "white" }} />
                        <span>store</span>
                    </div>
                </Link>

                <div className="header-main">
                    <div className="search-container">
                        <div className={showSearch ? "search-wrapper-open" : "search-wrapper"}>
                            <img className="search-icon" src={loupe} alt="search icon" />
                            <input id="input1"
                                onFocus={(ev) => {
                                    ev.target.value = ""
                                    sortDispatch({
                                        type: "filterBySearch",
                                        payload: ev.target.value
                                    })
                                }}
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
                            <img className="clear-icon" alt="close icon" src={close} onClick={(ev) => {
                                setShowSearch(false)
                                document.getElementById("input1").value = "";
                                sortDispatch({
                                    type: "filterBySearch",
                                    payload: ""
                                })
                            }} />

                        </div>
                        {
                            showSearch ? null : <div className="search-mobile-icon" onClick={() => setShowSearch(!showSearch)}>
                                <FaSearch />
                            </div>
                        }

                    </div>

                    <div className="cart-btn">
                        <DropdownCart />
                    </div>


                    <div className={showMenu ? "menu-wrapper-open" : "menu-wrapper"}>

                        <Link to="/about">
                            <div onClick={() => setShowMenu(false)}>About</div>
                        </Link>

                        <div onClick={() => setShowMenu(false)}><a href="https://github.com/AleksandraWolska/store.io">Code</a></div>
                    </div>
                    <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header