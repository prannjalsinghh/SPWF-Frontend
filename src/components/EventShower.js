import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EventShower = (props)=>{
   const navigate= useNavigate()
    const [showData,showDataHandler] = useState(false);

    const showEventData = ()=>{
        navigate(props.event.event_name)
    }
    return( 
            <div className="recentEventContent" style={{ 
                backgroundImage: `url(${props.event.image})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
            }}>
                 <div><h3>{props.event.event_name}</h3><button onClick={showEventData}>View Details</button></div> 
                
            </div>
    )
    
}
export default EventShower;