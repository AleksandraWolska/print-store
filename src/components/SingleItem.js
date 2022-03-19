
import React from 'react'
import "./SingleItem.css"
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'


const SingleItem = ({ item }) => {
  return (
    <div className='item-container'>
      <p>{item.images[0]}</p>
      <img src={item.images[0]} alt="Product Image" />
      <p>{item.title}</p>
      <div>
        <div>
        {[...Array(5)].map((_, i) => (
            <span key={i}>
                { item.rating < i ? <AiOutlineStar/> : <AiTwotoneStar/>}
            </span>
        ))}
        </div>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

export default SingleItem