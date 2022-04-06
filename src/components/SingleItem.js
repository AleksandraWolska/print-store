
import React from 'react'
import "./SingleItem.css"
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import { CartState } from './context/Context'



const SingleItem = ({ item }) => {

  const {
    state: {cartArray},
    dispatch,
  } = CartState()

  return (
    <div className='item-container'>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
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
        <div className='item-price'>${item.price}</div>
      </div>

      {
        cartArray.some(el => el.id=== item.id) ? (
        <button onClick={() => dispatch({type: 'removeFromCart', payload: item})} className='cart-button remove-from-cart-button '>Remove from cart</button>
        ) : (
          item.quantity ? 
          <button onClick={() => dispatch({type: 'addToCart', payload: item})} className='cart-button add-to-cart-button'>Add to cart</button>
          : <div className='out-of-stock'>Out of stock!</div>
        )
      }
    </div>
  )
}

export default SingleItem