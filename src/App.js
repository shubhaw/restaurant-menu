import React from 'react';
import "./App.css";
import Menu from './components/Menu/Menu';
import data from "./assets/db/db.json";
import Footer from './components/Footer/Footer';
import Toolbar from './components/Toolbar/Toolbar';
import SideNavbar from './components/SideNavbar/SideNavbar';

function App() {
    const [isSideNavbarOpen, setIsSideNavbarOpen] = React.useState(false);
    // const [selectedMenu, setSelectedMenu] = React.useState("foodMenu");
    const [selectedMenu, setSelectedMenu] = React.useState("barMenu");
    return (
        <div className="app">
            <Toolbar onMenuIconClick={() => setIsSideNavbarOpen(true)} />
            <SideNavbar open={isSideNavbarOpen}
                closeSideNavbar={() => setIsSideNavbarOpen(false)}
                foodMenu={data.foodMenu}
                barMenu={data.barMenu}
                selectedMenu={selectedMenu}
                onMainMenuChange={selectedMainMenu => setSelectedMenu(selectedMainMenu)} />
            <div onClick={() => setIsSideNavbarOpen(false)}>
                <Menu {...data.foodMenu[0]} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
