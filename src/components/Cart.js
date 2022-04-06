import React from "react";
import { CartState } from "./context/Context.js";
import "./Cart.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa"


const Cart = () => {

    const {
        state: { cartArray },
        dispatch,
    } = CartState();

    const sumUp = () => {
        let sum = 0;
        cartArray.map((item) => (sum += item.price * item.cartQuantity));
        return sum.toFixed(2);
    };

    const sumQuantity = () => {
        let sum = 0;
        cartArray.map((item) => sum += parseInt(item.cartQuantity));
        return sum;
    };

    
    return (
        <div className="cart-home">
            <div className="cart-items-container">
                <ul>
                    {cartArray.map((item) => (
                        <div className="summary-item" key={item.id}>
                            <div className="image-container">
                                <img className="image" src={item.image} alt={item.title} />{" "}
                            </div>

                            <div className="title">{item.title}</div>
                            <div className="price">${item.price}</div>
                            <div className="quantity">
                                <BiMinus
                                    className="icon"
                                    onClick={() => {
                                        dispatch({
                                            type: "changeCartQuantity",
                                            payload: {
                                                id: item.id,
                                                cartQuantity: item.cartQuantity - 1 || 1,
                                            },
                                        })
                                    }

                                    }
                                />
                                <input
                                    className="input-quantity"
                                    type="number"
                                    value={item.cartQuantity}
                                    onChange={(ev) =>
                                        dispatch({
                                            type: "changeCartQuantity",
                                            payload: { id: item.id, cartQuantity: ev.target.value || 1 },
                                        })
                                    }
                                ></input>
                                <BiPlus
                                    className="icon"
                                    onClick={() => {
                                        dispatch({
                                            type: "changeCartQuantity",
                                            payload: {
                                                id: item.id,
                                                cartQuantity: parseInt(item.cartQuantity) + 1,
                                            },
                                        })
                                    }

                                    }
                                />
                            </div>

                            <div className="icon">
                                <FaTrashAlt
                                    size={20}
                                    onClick={() =>
                                        dispatch({ type: "removeFromCart", payload: item })
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="summary-container">
                <div className="summary-text">
                    <div className="summary-quantity">
                        Items in cart: {sumQuantity()}
                    </div>
                    <div className="summary-price">Total: ${sumUp()}</div>
                    <div className="proceed-button">Proceed to checkout</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
