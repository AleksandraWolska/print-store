import React from "react";
import { CartState } from "./context/Context";
import SideFilters from "./SideFilters";
import SingleItem from "./SingleItem";

import "./Home.css";

const Home = () => {

    const {
        state: { items },
        sortState: { sort, byAvailable, byRating, bySearch },
    } = CartState();


    const reloadItems = () => {
        let newItems = items
        if (sort) {
            
            newItems = newItems.sort((a, b) => (
                sort === "priceAsc" ? a.price - b.price  : b.price - a.price
            )) 
        } 

        if (!byAvailable) {
            newItems = newItems.filter((item) => item.quantity > 0)
        }

        if (byRating) {
            newItems = newItems.filter( (item) => item.rating.rate >= byRating
            
            )
        }

        if( bySearch) {
            newItems = newItems.filter((item) => item.title.toLowerCase().includes(bySearch)
            
            )

        }
        return newItems;
        }


    

    return (
        <div className="home">
            <SideFilters />
            <div className="items-container">
                {reloadItems().map((i) => {
                    return <SingleItem item={i} key={i.id} />;
                })}
            </div>
        </div>
    )
}


export default Home;
