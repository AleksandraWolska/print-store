import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {



    return (
        <HashRouter>
        <Header />
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cart" exact element={<Cart/>}/>

            </Routes>
        </HashRouter>
    );
}

export default App;
