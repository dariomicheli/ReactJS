import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Tooltip from '@mui/material/Tooltip';

export default function CartWidget() {
    const { quantity } = useContext(CartContext);
    const navigate = useNavigate();

    function notificationsLabel(count) {
        if (count === 0) {
        return "sin notificaciones";
        }
        if (count > 99) {
        return "más de 99 notificaciones";
        }
        return `${count} notificaciones`;
    }

    const handleCartBtn = () =>{
        navigate("/cart");
    }

    return (
        <Tooltip title="Carrito">
            <IconButton 
            aria-label={notificationsLabel(quantity)}
            onClick={handleCartBtn}
            >
                <Badge badgeContent={quantity} color="secondary">
                    <ShoppingCartIcon className="shoppingCartIcon" />
                </Badge>
            </IconButton>
        </Tooltip>
    );
}
