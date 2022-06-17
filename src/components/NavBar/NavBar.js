import './NavBar.css';
import MenuItems from './MenuItems';
import logo from '../../assets/logo.svg';

const NavBar = () =>{
    return(
        <div className="menu">
            <div className="menuContainer">
                <div>
                    <img src="" alt="" />
                    <span>LOGO</span>
                </div>
                <MenuItems />
            </div>
        </div>
    );
}

export default NavBar;