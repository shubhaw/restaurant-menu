import React from 'react';
import "./App.css";
import Menu from './components/Menu/Menu';
import MenuItemsBox from './components/MenuItemsBox/MenuItemsBox';
import data from "./assets/db/db.json";
import Footer from './components/Footer/Footer';

function App() {
    console.log(data);
    return (
        <div className="app">
            <Menu {...data.foodMenu[0]} />
            <Footer />
        </div>
    );
}

export default App;
