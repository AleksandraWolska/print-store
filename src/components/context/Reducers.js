
//signature: 
// (state, action) = newState

export const cartReducer = (state, action) => {
    switch (action.type) {

        case "addToCart":
            return {...state, cartArray: [...state.cartArray, {...action.payload, cartQuantity: 1}]}
        case "removeFromCart":
            return {...state, cartArray: state.cartArray.filter(el => el.id !== action.payload.id)}
        case "changeCartQuantity":
            return {...state, 
                cartArray: state.cartArray.filter(element => 
                    element.id === action.payload.id 
                    ? ( element.cartQuantity = action.payload.cartQuantity )
                    : ( element.cartQuantity ))}
        default:
            return state
    }
}


export const sortReducer = (state, action) => {
    switch(action.type) {
        case "sortByPrice":
            return {...state, sort: action.payload}

        case "filterByAvailable":
            return {...state, byAvailable: !state.byAvailable}

        case "filterByRating":
            return {... state, byRating: action.payload}
        case "filterBySearch":
            return {...state, bySearch: action.payload}

        case "clearFilters":
            return {      
                byAvailable: false,
                byRating: 0,
                bySearch: ""
            }
        default:
            return state
    }
}
