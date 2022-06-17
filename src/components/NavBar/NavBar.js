import './NavBar.css';
import MenuItems from './MenuItems';
import logo from '../../assets/logo.png';

const NavBar = () =>{
    return(
        <div className="menu">
            <div className="menuContainer">
                <div className='logo'>
                    <a href="/" ><img src={logo} alt="logo" className='logoImg'/></a>
                    <a href="/" className='logoName'><span>HAPPY FEET</span></a>
                </div>
                <MenuItems />
            </div>
        </div>
    );
}

export default NavBar;