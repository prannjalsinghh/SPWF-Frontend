import './getInvolved.css';
import { Link, useNavigate } from 'react-router-dom';

const GetInvolved = () =>{
  let navigate = useNavigate(); 
  const routeChange = (path) =>{
    navigate(path);
  }

  const volunteerButtonSubmitHandler = ()=>{
    routeChange('volunteer');
  }

    return(
        <div className="getInvolved">
    <h3>Get Involved</h3>
    <h1>Let's Make A Difference Today</h1>
    <div className="involved">
      <div className="involvedDonate">
        <i className="fa-solid fa-user-group fa-2x"></i>
        <h3>Become A Volunteer</h3>
        <p>Nothing greater than giving back to the society. Join our NGO to help us future-proof the next generation today! Join part-time virtual volunteering program to feel the joy of helping children in need. </p>
        <button onClick={volunteerButtonSubmitHandler}>Join Us Now</button>
      </div>
      <div className="involvedDonate">
        <i className="fa-solid fa-indian-rupee-sign fa-2x"></i>
        <h3>Donate To Support</h3>
        <p>Donating to the causes you care about not only benefits the charities themselves, it can be deeply rewarding for you too. Millions of people give to charity on a regular basis to support causes </p>
        <Link to="/donation"><button>Donate Us</button></Link>
      </div>
      <div className="involvedDonate">
        <i class="fa-solid fa-handshake-angle"></i>
        <h3>Become A Partner</h3>
        <p>Nothing greater than giving back to the society. Join our NGO to help us future-proof the next generation today! Join part-time virtual volunteering program to feel the joy of helping children in need. </p>
        <Link to="/contactUs"><button>Learn More</button></Link>
      </div>
    </div>
  </div>
    )
}
export default GetInvolved;
