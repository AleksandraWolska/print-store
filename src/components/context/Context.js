import React, { useContext, useReducer, createContext } from 'react'
import { cartReducer } from './Reducers'


const CartContext = createContext()

const Context = ({ children }) => {

    let items = []

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {
            data.products.map((product) => items.push(product))
            console.log(items)
        })


        //useResucer returns current state with dispatch method
    const [state, dispatch] = useReducer(cartReducer, {
        items: items,
        cartArray: []
    })



    return (
        <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(CartContext)
}


/*
       Format of json
       "id": 23,
       "title": "Orange Essence Food Flavou",
       "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
       "price": 14,
       "discountPercentage": 8.04,
       "rating": 4.85,
       "stock": 26,
       "brand": "Baking Food Items",
       "category": "groceries",
       "thumbnail": "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
       "images": [
         "https://dummyjson.com/image/i/products/23/1.jpg",
         "https://dummyjson.com/image/i/products/23/2.jpg",
         "https://dummyjson.com/image/i/products/23/3.jpg",
         "https://dummyjson.com/image/i/products/23/4.jpg",
         "https://dummyjson.com/image/i/products/23/thumbnail.jpg"
       ]
   */