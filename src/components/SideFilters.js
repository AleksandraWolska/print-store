import React, { useEffect, useState } from 'react'
import './SideFilters.css'
import Stars from './Stars'
import { CartState } from './context/Context'
import { BiFilterAlt } from 'react-icons/bi'
import { GrClose } from "react-icons/gr"


const SideFilters = () => {

    
    const { sortState: { sort, byAvailable, byRating }, sortDispatch } = CartState()
    const [showFilters, setShowFilters] = useState("desktop")
    console.log(sort, byAvailable, byRating)

    const checkScreenWidth = () => {window.innerWidth > 769  ? setShowFilters("desktop") : setShowFilters("mobile-hide")}

    let timeout = false

    const handleResize = () => {
        clearTimeout(timeout)  
        timeout = setTimeout(checkScreenWidth, 100)
    }
        
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    })
   
    
    console.log("Filter showing: " + showFilters)

    return (
        <div className='filter-total'>

            {(showFilters === "mobile-show" || window.innerWidth > 769) ?     //if the screen is big enough or show Filters is set to true

                <div className="filter-container">
                    <div className="close-icon" onClick={() => {setShowFilters("mobile-hide")}}>
                        <GrClose size={20} />
                    </div>

                    <span className="filter-title">Filters</span>

                    <ul className="radio-container">
                        <li>
                            <input
                                onChange={() => sortDispatch({ type: "sortByPrice", payload: "priceDesc" })}
                                checked={sort === "priceDesc" ? true : false}
                                id="desc"
                                type="radio"
                                name="radio" />
                            <label htmlFor="desc">Price Descending</label>
                        </li>
                        <li>


                            <input
                                onChange={() => sortDispatch({ type: "sortByPrice", payload: "priceAsc" })}
                                checked={sort === "priceAsc" ? true : false}
                                id="asc"
                                type="radio"
                                name="radio" />
                            <label htmlFor="asc">Price Ascending</label>
                        </li>

                    </ul>

                    <div className="stars-container">
                        <div className="stars-title">Rating: </div>

<div className='stars-icons'>
                        <Stars 
                        rating={byRating}
                            onClick={(ev) => {

                                sortDispatch({
                                    type: "filterByRating",
                                    payload: ev
                                })
                            }} />
                    </div>
                    </div>

                    <div className="checkbox-container">


            
                            <input
                                onChange={() => sortDispatch({ type: "filterByAvailable" })}
                                checked={byAvailable}
                                id="s1"
                                type="checkbox"
                                className="switch" />
                            <label htmlFor="s1">Include out of stock</label>
        

                    </div>

                    <button
                        onClick={() =>
                            sortDispatch({
                                type: "clearFilters"
                            })}
                        className='clear-button'
                    >Clear Filters</button>
                    


                </div>
                :
                <div className="filter-icon" onClick={() => setShowFilters("mobile-show")}>
                    <BiFilterAlt size={35} />
                </div>

            }

        </div>
    )
}

export default SideFilters