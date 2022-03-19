
import React from 'react'
import "./SingleItem.css"

const SingleItem = ({ item }) => {
  return (
    <div className='item-container'>Halo{item.title}{item.stock}</div>
  )
}

export default SingleItem