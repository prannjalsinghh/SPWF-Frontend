import Pic1 from '../img/shiksharth.jpg';
// import Map from '../components/Map';
import Pic5 from '../images/Picture5.jpg';
import Pic4 from '../images/Picture4.png';
import Pic2 from '../images/Picture2.jpg';
import './EventRight.css'
import { Link } from 'react-router-dom';
function EventRight(props){
    const Events= [
        {
            img:Pic5,
            name:"Kaushal Uthan",
            description:"Skill development is very important to polish the skills of brain",
            link:"/KaushalUthan"
        },
        {
            img:Pic4,
            name:"Chikitsa",
            description:"good health facilities are necessary for a common man",
            link:"/Chikitsa"
        },
        {
            img:Pic2,
            name:"Aahar",
            description:"Aahar is to provide nutritious and safe food to children.",
            link:"/Aahar"
        },
        {
            img:Pic1,
            name:"Shiksharth",
            description:"Shiksharth aims at providing health and medical benefits.",
            link:"/Shiksharth"
        }
    ]
  function eventFilter(){
   return Events.filter(manager);

  }
  function manager(event){
     return event.name!=props.current;
  }
    return(
        <div className="shikright">
                <div className="eventDetails">
                    <div className='innereventsdetails'>
                        <h3>More Events</h3>
                        {eventFilter().map((event)=><Link to={event.link}><div><img src={event.img}/><div><b>{event.name}</b><p>{event.description}</p></div></div></Link>)}

                    </div>
                   
                    <div className='eventJoin'>
                        <h2>Join Together For Charity</h2>
                        <br/>
                        <p>By using your time, money or voice to support charities and causes you love, you can make a difference to those who need it most every day of the year</p>
                        <br/>
                        <Link to="/donation"><button>Donate Now</button></Link>
                    </div>
                </div>
            </div>
    )
}
export default EventRight;
