import React, {useState} from 'react'
import './SideFilters.css'
import Stars from './Stars'
import { CartState } from './context/Context'

const SideFilters = () => {


 

  const {sortState: { sort,  byAvailable, byRating}, sortDispatch} = CartState()

  console.log(sort, byAvailable, byRating)

  return (
    <div className="filter-container">
      <span className="filter-title">Filters</span>
      <ul id="radio-container">
        <li>
          <input 
            onChange={() => sortDispatch({type: "sortByPrice", payload: "priceDesc"})}
            checked={sort === "priceDesc" ? true : false} 
            id="desc" 
            type="radio" 
            name="radio" />
          <label htmlFor="desc">Price Descending</label>
        </li>
        <li>
          

          <input 
          onChange={() => sortDispatch({type: "sortByPrice", payload: "priceAsc"})}
          checked={sort === "priceAsc" ? true : false} 
          id="asc" 
          type="radio" 
          name="radio" />
          <label htmlFor="asc">Price Ascending</label>
        </li>
        <li>
          <input id="rat" type="radio" name="radio"  />
          <label htmlFor="rat">Rating Descending</label>
        </li>
      </ul>

      <div id="stars-container">

        
        <Stars rating={byRating} 
        onClick={(ev) => {
        
          sortDispatch({
            type: "filterByRating",
            payload: ev
          })
        }}/>
      </div>

      <ul id="checkbox-container">
       

        <li>
          <input 
          onChange={() => sortDispatch({ type: "filterByAvailable"}) }
          checked={byAvailable}
          id="s1" 
          type="checkbox" 
          className="switch" />
          <label htmlFor="s1">Include out of stock</label>
        </li>
        
      </ul>

      <button 
      onClick={()=>
      sortDispatch({
        type: "clearFilters"
      })}
      className='clear-button'
      >Clear Filters</button>

    </div>
  )
}

export default SideFilters