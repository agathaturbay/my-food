import './Footer.scss';
import { NavLink, Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

function Footer (){
  return (
    <div className='Footer-bg'>
        <div className='Align-middle'>
            <NavLink className="Footer-button" to="/">
                Home
            </NavLink>
            <NavLink className="Footer-button" to="/recipes">
                Recipes
            </NavLink>
            <NavLink className="Footer-button" to="/about">
                About
            </NavLink>
            <div className='Social-media'>
                <Link to={{ pathname: "https://www.instagram.com/garciaa_tata/" }} target="_blank" className='Footer-social'>
                    <AiOutlineInstagram />
                </Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/agatha-garcia-1a650b213/" }} target="_blank" className='Footer-social'>
                    <AiFillLinkedin />
                </Link>
                <Link to={{ pathname: "https://github.com/agathaturbay" }} target="_blank" className='Footer-social'>
                    <AiOutlineGithub />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;