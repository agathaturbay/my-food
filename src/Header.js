import './Header.scss';
import './App';
import { NavLink } from 'react-router-dom';


function Header (){
    return(
        <div className="App">
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