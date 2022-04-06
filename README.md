Store by Aleksandra Wolska

Store with various products.
The application uses the React framework.
Due to the need to use the same list of products in many components, I decided to use the useContext hook and few reducers to handle items in the cart as well as sorting/filtering.
I used products from https://fakestoreapi.com/products, but I needed to add the quantity field to them, so they are copied to the source code, not fetched.

The project was a big challenge in terms of responsiveness, which I finally managed to master. If I wrote the code again, I would have planned it completely differently, but I will leave it as it is for future nostalgia. This is also the reason for using useEffect hook and its cleanup function - at some point I managed to leak a memory that I didn't know was possible in React
