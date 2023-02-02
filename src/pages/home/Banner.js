import './Banner.scss';
import '../../style.scss'

function Banner (){
	return (
        <div className="Banner-img row">
            <div className='Banner-text column Align-middle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis ex, accumsan quis euismod sed, aliquet a odio. Pellentesque eu egestas quam. 
                Sed aliquet mauris eu purus ornare sagittis. Ut sed tempor mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Donec lobortis felis leo, sit amet maximus ipsum malesuada nec. Curabitur libero tellus, accumsan sed iaculis vitae, placerat in justo. In quis blandit nulla.
                <div class="container">
                    <a href="#" class="button">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">READ MORE</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;