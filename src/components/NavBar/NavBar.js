import './NavBar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const NavBar = () =>{
    return(
        <div className="menu">
            <div className="menuContainer">
                <div>
                    <img src="" alt="" />
                    <span>LOGO</span>
                </div>
                <nav className="menuItems">
                    <a href="/">Categoria 1</a>
                    <a href="/">Categoria 2</a>
                    <a href="/">Categoria 3</a>
                </nav>
                <ShoppingCart />
            </div>
        </div>
    );
}

export default NavBar;