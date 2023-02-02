import './Header.scss';
import '../style.scss'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import '../App';
import logo from '../assets/Logo.png'
import { NavLink, Link } from 'react-router-dom';


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
                <div className='Align-middle'>
                    <Link to={{ pathname: "https://www.instagram.com/garciaa_tata/" }} target="_blank" className='Btn'>
                        <AiOutlineInstagram />
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/agatha-garcia-1a650b213/" }} target="_blank" className='Btn'>
                        <AiFillLinkedin />
                    </Link>
                    <Link to={{ pathname: "https://github.com/agathaturbay" }} target="_blank" className='Btn'>
                        <AiOutlineGithub />
                    </Link>
                </div>
            </div>
      </div>
    )
}

export default Header;