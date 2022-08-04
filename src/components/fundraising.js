import { Fragment } from "react";
import './fundraising.css';
import pic from "../images/Picture10.png";

const Fundraising = () =>{
    return(
        <div className = "fundRaising">
            <div className="fundLeft">
                <h5>Impact Stories</h5>
                <h1>FROM DOING CHORES TO SHINING IN SCHOOL: RUPALI’S STORY </h1>
                <p>Rupali belongs to an impoverished family residing in Uttar Pradesh. Due to work, her whole family had to migrate to Delhi.The living, her father earned used to get exhausted in his alcohol consumption, eventually leaving the financial needs of the house unfulfilled. Rupali’s mother suffered from illness making her unable to work. Thus, Rupali had to contribute to the earnings of the family. After completing chores at home, she used to work as a domestic help at others’ houses. Rupali had never gone to school. However, having a desire to study, she joined our project “Shiksharth”. She continued to learn with passion and determination despite several adversities. </p>
                <div className="playButton">
                <a  style={{color:"white"}} href="https://youtu.be/dB33mlhTm2s" ><i class="fa-solid fa-circle-play"></i></a>
                    <p>PLAY DOCUMENTRY</p>
                </div>
            </div>
            <div className="fundRight">
                <h5>Stories</h5>
                <img src={pic}></img>
            </div>
        </div>
    )
}
export default Fundraising;