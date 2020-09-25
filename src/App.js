import React from 'react';
import "./App.css";
import Menu from './components/Menu/Menu';
import data from "./assets/db/db.json";
import Footer from './components/Footer/Footer';
import Toolbar from './components/Toolbar/Toolbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import MakeData from './components/MakeData';
import Home from './components/Home/Home';
import BarMenu from './components/BarMenu/BarMenu';

function App() {
    const [isSideNavbarOpen, setIsSideNavbarOpen] = React.useState(false);
    const [selectedMainMenu, setSelectedMainMenu] = React.useState();
    const [selectedSubMenuIndex, setSelectedSubMenuIndex] = React.useState(0);
    const [appClass, setAppClass] = React.useState("black");
    React.useEffect(() => {
        if(selectedMainMenu === "barMenu") {
            setAppClass("black");
        } else {
            setAppClass(`bg${(selectedSubMenuIndex%6)+1}`)
        }
    }, [selectedMainMenu, selectedSubMenuIndex])
    return (
        <div className={appClass}>
            {!selectedMainMenu && <Home setMainMenu={mainMenu => setSelectedMainMenu(mainMenu)} />}

            {!!selectedMainMenu && <>
                <Toolbar onLogoClick={() => setSelectedMainMenu()} onMenuIconClick={() => setIsSideNavbarOpen(true)} />
                <MakeData />
                <SideNavbar open={isSideNavbarOpen}
                    closeSideNavbar={() => setIsSideNavbarOpen(false)}
                    foodMenu={data.foodMenu}
                    barMenu={data.barMenu}
                    selectedMenu={selectedMainMenu}
                    onMainMenuChange={selectedMainMenu => {
                        setSelectedMainMenu(selectedMainMenu);
                        setSelectedSubMenuIndex(0);
                    }}
                    onSubMenuChange={selectedSubMenuIndex => setSelectedSubMenuIndex(selectedSubMenuIndex)} />
                <div className="mainBody" onClick={() => setIsSideNavbarOpen(false)}>
                    {selectedMainMenu === "foodMenu" && <Menu {...data.foodMenu[selectedSubMenuIndex]} />}
                    {/* {selectedMainMenu === "barMenu" && <Menu {...data.barMenu[selectedSubMenuIndex]} />} */}
                    {selectedMainMenu === "barMenu" && <BarMenu {...data.barMenu[selectedSubMenuIndex]} />}
                    <Footer />
                </div>
            </>}
        </div>
    );
}

export default App;
