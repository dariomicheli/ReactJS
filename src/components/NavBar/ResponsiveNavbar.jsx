import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {NavLink,useNavigate,Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useAuth } from '../../context/AuthContext';
import AvatarUser from '../AvatarUser/AvatarUser';
import Stack from '@mui/material/Stack';
import logo from '../../assets/logo.png';
import MenuItems from './MenuItems';

import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
    
    const items = MenuItems();
    const {user} = useAuth();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleBtnAcceder = () => navigate('/login');

    const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{justifyContent:"space-between"}}>
                    
                    <Box sx={{display: { xs: 'none', md: 'flex' },mr:2}}>
                        <img src={logo} alt="logo" className='logoImg'/>
                    </Box>
                    <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                        <Link to="/" className="logo-name">Happy Feet</Link>
                    </Box>

                    <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {items.map((item) => (
                            <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                                <Link
                                to={`/categoria/${item.key}`} 
                                onClick={handleCloseNavMenu}
                                className='itemResponsive'
                                >
                                    {item.description}
                                </Link>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>

                    <Stack direction="row" alignItems="center">
                        <Box sx={{display: { xs:'none', sm: 'flex', md: 'none' },mr:2}}>
                            <img src={logo} alt="logo" className='logoImg'/>
                        </Box>
                        <Box sx={{display: { xs: 'flex', md: 'none' }}}>
                            <Link to="/" className="logo-name">Happy Feet</Link>
                        </Box>
                    </Stack>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center", gap:10 }}>
                        {items.map((item) => (
                            <NavLink to={`/categoria/${item.key}`} className='itemFull' key={item.id}>
                                {item.description}
                            </NavLink>
                        ))}
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <CartWidget />
                        {!user
                            ? (
                                <Tooltip title="Iniciar Sesión">
                                    <IconButton onClick={handleBtnAcceder}>
                                        <Avatar />
                                    </IconButton>
                                </Tooltip>
                            )
                            : <AvatarUser />
                        }
                    </Stack>   
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveNavbar;
