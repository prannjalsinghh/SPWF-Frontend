import { Link } from 'react-router-dom';
import bgImageAboutUs from '../img/IMG_20211129_165917.jpg';
import Button from '../UI/button';
import './AboutUsGetInvolved.css'
function AboutUsGetInvolved(){


    return(
        <div className="AboutUsGetInvolved" style={{backgroundImage: `url(${bgImageAboutUs})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',
         }}>
            <div className='AboutUsGetInvolvedTitle'>
                Get Involved
            </div>
            <div className='AboutUsGetInvolvedFact'>
                <h1>We Fed more than 13000+ People during Covid-19 Pandemic</h1>
            </div>
            <Link to="/volunteer"><button >Get Involved Today</button></Link>

        </div>
    )
}
export default AboutUsGetInvolved;