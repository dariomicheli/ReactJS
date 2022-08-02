import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useAuth } from '../../context/AuthContext';

const AvatarUser = () => {
    const {logout,user} = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () =>{

        try {
            await logout();
        } catch (error) {
            console.log(error);
        } 
        
    }

    function stringAvatar({displayName}) {
        if (!displayName) {
            return {children: 'Yo'};
        }
        return {children: `${displayName.split(' ')[0][0]}${displayName.split(' ')[1][0]}`};
    }

    return (
        <>
            <Tooltip title="Cuenta">
                <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar
                    sx={{ bgcolor: lightBlue[500], width:35, height:35 }}
                    {...stringAvatar(user)}
                    >                   
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Salir
                </MenuItem>
            </Menu>
        </>
    )
}

export default AvatarUser