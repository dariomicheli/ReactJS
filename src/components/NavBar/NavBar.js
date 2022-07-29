import './NavBar.css';
import MenuItems from './MenuItems';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavBar = () =>{
    const {logout,user} = useAuth();

    const handleLogout = async () =>{
        await logout();
    }

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
                    <div>
                        <span>{!user ? '' : user.email}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;