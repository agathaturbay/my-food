import './Header.scss';
import '../style.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import '../App';
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';


function Header (){
    return(
        <div className="Header_bg">
            <div className='Nav-bts'>
                <NavLink className="Button" to="/">
                    Home
                </NavLink>
                <NavLink className="Button" to="/recipes">
                    Recipes
                </NavLink>
            </div>
            <div className="Home_logo">
                <NavLink to="/">
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className='Social-media'>
                <AiFillLinkedin />
                <AiOutlineGithub />
                <AiOutlineInstagram />
            </div>
      </div>
    )
}

export default Header;