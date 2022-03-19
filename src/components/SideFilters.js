import React, {useState} from 'react'
import './SideFilters.css'
import Stars from './Stars'

const SideFilters = () => {


  const [stars, setStars] = useState(3)













  return (
    <div className="filter-container">
      <span className="filter-title">Filters</span>
      <ul id="radio-container">
        <li>
          <input id="r1" type="radio" name="radio" value="1" />
          <label for="r1">Price Ascending</label>
        </li>
        <li>
          <input id="r2" type="radio" name="radio" value="2" />
          <label for="r2">Price Descending</label>
        </li>
        <li>
          <input id="r3" type="radio" name="radio" value="2" />
          <label for="r3">Rating Descending</label>
        </li>
      </ul>

      <div id="stars-container">
        <Stars rating={stars} onClick={(ev)=> setStars(ev)}/>
      </div>

      <ul id="checkbox-container">
        <li>
          <input id="c1" type="checkbox" />
          <label for="c1">Checkbox</label>
        </li>
        <li>
          <input id="c2" type="checkbox" />
          <label for="c2">Checkbox</label>
        </li>

        <li>
          <input id="s1" type="checkbox" class="switch" />
          <label for="s1">Include out of stock</label>
        </li>
        <li>
          <input id="s2" type="checkbox" class="switch" />
          <label for="s2">Switch</label>
        </li>
      </ul>

      <button className='clear-button'>Clear Filters</button>

    </div>
  )
}

export default SideFilters