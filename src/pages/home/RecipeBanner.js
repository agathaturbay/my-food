import '../css/RecipeBanner.scss';
import '../../style.scss'
import cookie from '../../assets/Chocolate-chip-cookie.jpg';
import { NavLink } from 'react-router-dom';
function RegisterBanner (){
	return (
        <div className='Recipes'>
            <div className='Recipes-banner'>
                DID YOU KNOW THAT
            </div>
            <div className='row'>
                <img src={cookie} className="Chocolate-cookie column" alt='chocolate cookie'/>
                <div className=' column'>
                    No one knows the origin of chocolate chip cookies?
                    There are a few ideas of where this popular recipe came from.
                    One suggests Ruth Wakefield, the creator of chocolate chip cookies, ran out of nuts for ice cream cookies and used chocolate instead.
                    Others suggest chocolate chunks accidentally fell into the mixer, but the true story has never been confirmed.
                    <br/>
                    Find this and more recipes clicking here!
                    <br/>
                    <NavLink className="Page-button" to="/recipes">
                        <button className="myButton">FIND RECIPES!</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default RegisterBanner;