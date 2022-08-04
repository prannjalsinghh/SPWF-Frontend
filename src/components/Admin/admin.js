import { useState } from "react";
import ShowContactUsData from './ShowContactUsData'
import styles from './admin.module.css'
import { useNavigate } from "react-router-dom";
import ShowContactUsDataMain from "./ShowContactUsDataMain";
import ShowVolunteerDataMain from "./ShowVolunteerDataMain";
import ShowDonationDataMain from "./ShowDonationDataMain";

const Admin = (props)=>{
    
    const [contactData, showContactData] = useState(false);
    const [volunteerData, showVolunteerData] = useState(false);
    const [donationData, showDonationData] = useState(false);
    const [checkLogin,changeChecker] = useState(props.checkLogin)

    function showContactUsDataHandler(){
        showContactData(true);
        changeChecker(false);
    }
    function showDonationDataHandler(){
        showDonationData(true);
        changeChecker(false);
    }
    function showVolunteerDataHandler(){
        showVolunteerData(true);
        changeChecker(false);
    }
    function backHandler(){
        changeChecker(true);
        showContactData(false);
        showVolunteerData(false);
        showDonationData(false);
    }



    return(
       
        <div>
           {!checkLogin && <div style={{textDecoration:"underline",cursor:"pointer",width:"fit-content"} } onClick={backHandler}>
                <i className="fa-solid fa-arrow-left" style={{color:"orange"}}></i>
                Back
           </div>}
            {contactData && <ShowContactUsDataMain/>}
            {volunteerData && <ShowVolunteerDataMain/>}
            {donationData && <ShowDonationDataMain/>}
            
            {checkLogin && <div className={styles.main}>
                <h1>Welcome to the Admin Panel</h1>
                <h3>Which data do you want to access?</h3>
                <p onClick={showContactUsDataHandler}>Show contact us data</p>
                <p onClick={showVolunteerDataHandler}>Show Volunteer Applicants Data</p>
                <p onClick={showDonationDataHandler}>Show Donation Data</p>

            </div>}
            {!props.checkLogin && <p>Unauthorized Access</p>}
        </div>
    )
}
export default Admin;