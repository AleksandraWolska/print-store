import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {



    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/store.io" exact element={<Home/>}/>
                <Route path="/store.io/cart" exact element={<Cart/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
