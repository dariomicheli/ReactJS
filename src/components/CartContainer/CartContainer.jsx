import { useContext } from "react";
import "./CartContainer.css";
import CartList from "../CartList/CartList";
import CartTotal from "../CartTotal/CartTotal";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { cartProducts } = useContext(CartContext);

    return (
        <>
            <h2 className="cart-title">Mi Carrito</h2>
            {cartProducts.length > 0 ? (
                <div className="cart-container">
                    <CartList />
                    <CartTotal />
                </div>
            ) : (
                <div className="cart-empty">
                    <h3>Su carrito está vacio</h3>
                    <p>
                        Para seguir comprando, navegar por las categorías en el sitio, o
                        haga click <Link to="/">aca</Link>.
                    </p>
                </div>
            )}
        </>
    );
};

export default CartContainer;
