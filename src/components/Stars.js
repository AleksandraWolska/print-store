import React from 'react'

import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'

const Stars = ( {rating, onClick} ) => {
    return (

        <>
        {[...Array(5)].map((_, i) => (
            <span key={i} onClick={() => onClick(i)}>
                { rating.rate < i ? <AiOutlineStar/> : <AiTwotoneStar/>}
            </span>
        ))}

        </>




    )
}

export default Stars