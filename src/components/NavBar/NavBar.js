import './NavBar.css';
import MenuItems from './MenuItems';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return(
        <header>
            <div className="menu">
                <div className="menuContainer">
                    <div className='logo'>
                        <Link to="/" >
                            <img src={logo} alt="logo" className='logoImg'/>
                        </Link>
                        <Link to="/" className='logoName'>
                            <span>HAPPY FEET</span>
                        </Link>
                    </div>
                    <MenuItems />
                    <CartWidget />
                </div>
            </div>
        </header>
    );
}

export default NavBar;