
import './App.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';

function App() {

    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/about" exact element={<About />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
