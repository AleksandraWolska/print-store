
import React from 'react'
import "./SingleItem.css"
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'


const SingleItem = ({ item }) => {
  return (
    <div className='item-container'>
      <div className="image-container">
        <img src={item.image} alt="Product Image" />
      </div>
      
      <div className='item-title'>{item.title}</div>


      <div className='rating-and-price'>
        <div className='stars-rating'>
        {[...Array(5)].map((_, i) => (
            <span key={i}>
                { item.rating.rate < i ? <AiOutlineStar/> : <AiTwotoneStar/>}
            </span>
        ))}
        <span>{item.rating.count}</span>
        </div>
        <div className='item-price'>{item.price}</div>
      </div>

      <button className='add-to-cart-button'>Add to cart</button>


    </div>
  )
}

export default SingleItem