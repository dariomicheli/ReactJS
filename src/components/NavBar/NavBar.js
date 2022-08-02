import './NavBar.css';
import MenuItems from './MenuItems';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AvatarUser from '../AvatarUser/AvatarUser';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const NavBar = () =>{
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleBtnAcceder = () =>{
        navigate('/login');
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
                    <Stack direction="row" spacing={2} alignItems="center">
                        <CartWidget />
                        {!user
                            ? <Button variant="contained" onClick={handleBtnAcceder}>Acceder</Button>
                            : <AvatarUser />
                        }
                    </Stack>                 
                </div>
            </div>
        </header>
    );
}

export default NavBar;