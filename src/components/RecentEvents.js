import './RecentEvents.css';
import img from '../img/event.jpeg'
import img2 from '../images/Picture5.jpg'
import img3 from '../img/shiksharth.jpg'
import EventShower from './EventShower.js';

const DUMMY = [
    {
        image:img3,
        event_name:"Shiksharth",
        eventDetail:"The programme aimed at providing maximum  benefits to those residing in the slums. "
    },
    {
        image: img,
        event_name: "Aahar",
        eventDetail:"This programme aims to provide each child with a nutritious and safe diet."
    },
    {
        image:img2,
        event_name:"KaushalUthan",
        eventDetail:"The programme aimed at providing maximum health and medical benefits to those residing in the slums. "
    },
    

];

function RecentEvents(){
   
    return(
        

        
        <div className='RecentEvents'>
            <div className='RecentEventsHeading'>
                <div>
                    <h3>PROGRAMMES</h3>
                    <h1>Donate To Charity Campaign Around The World!</h1>
                    </div>
            </div>
            <div className='RecentEvent'>
                { DUMMY.map((each)=> <EventShower event={each}/>)}
                
            </div>
            
            

        </div>
       
    )
}
export default RecentEvents;