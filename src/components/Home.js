import React from 'react'
import { CartState } from './context/Context'
import SideFilters from './SideFilters'
import SingleItem from './SingleItem'

import "./Home.css"

const Home = () => {


  console.log("Renderowanie Home")

  const { state: { items } } = CartState()

  console.log("stan:")
  console.log(items)


  return (
    <div className="home">
      <SideFilters/>
      <div className='items-container'>
        {items.map((i) => {
          return (
            <SingleItem item={i} key={i.id}/>
          )
        }
        )}
      </div>

    </div>





  )
}

export default Home
