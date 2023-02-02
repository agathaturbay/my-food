import './RecipeBanner.scss';
import '../style.scss'

function RegisterBanner (){
	return (
        <div className='Recipes'>
            <div className='Recipes-banner Title Align-middle'>
                Find a recipe!
            </div>
            <br/>
            <div className='Text Align-middle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar, diam eu accumsan interdum, erat orci facilisis velit, nec feugiat massa ante vitae arcu. 
                Fusce maximus sem tortor, id dignissim turpis ultrices in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Donec facilisis dolor tristique purus volutpat pellentesque.
            </div>
        </div>
    )
}

export default RegisterBanner;