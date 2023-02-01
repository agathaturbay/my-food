import './Header.scss';
import '../App';
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';


function Header (){
    return(
        <div className="Header_bg">
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            <div className="Title">
                <NavLink className="Button" to="/">
                    Home
                </NavLink>
                <NavLink className="Button" to="/recipes">
                    Recipes
                </NavLink>
            </div>
      </div>
    )
}

export default Header;