import '../css/Banner.scss';
import '../../style.scss'
import { NavLink } from 'react-router-dom';

function Banner (){
	return (
        <div className="Banner-img row">
            <div className='Banner-text column Align-middle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis ex, accumsan quis euismod sed, aliquet a odio. Pellentesque eu egestas quam. 
                Sed aliquet mauris eu purus ornare sagittis. Ut sed tempor mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Donec lobortis felis leo, sit amet maximus ipsum malesuada nec. Curabitur libero tellus, accumsan sed iaculis vitae, placerat in justo. In quis blandit nulla.
                <div className="container">
                    <NavLink className="button" to="/recipes">
                        <div className="button__line"></div>
                        <div className="button__line"></div>
                        <span className="button__text">READ MORE</span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Banner;