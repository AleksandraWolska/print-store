import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <h1>About the project</h1>
      <p>The application uses the <span className='highlight'>React framework.</span></p>
      <p>Due to the need to use the same list of products in many components, I decided to use the <span className='highlight'>useContext hook and few reducers</span> to handle items in the cart as well as sorting/filtering.</p>
      <p>I used products from <a href='https://fakestoreapi.com/products'>https://fakestoreapi.com/products</a>, but I needed to add the quantity field to them, so they are copied to the source code, not fetched.</p>

      <p><span className='highlight'>The project was a big challenge in terms of responsiveness</span>, which I finally managed to master. If I wrote the code again, I would have planned it completely differently, but I will leave it as it is for future nostalgia.
        This is also the reason for using useEffect hook and its cleanup function - at some point I managed to create a memory leak that I didn't know was possible in React</p>


    </div>
  )
}

export default About