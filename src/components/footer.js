import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from '../images/spwf logo2.png'

import axios from 'axios'
import './footer.css'
const Footer  = () =>{
   

    return (
        <footer> 
            <div className="upperFooter">
                <div className="about-footer">
                    <h2>About Us</h2>
                    <p>
                    Shakuntala Poddar Welfare Foundation (SPWF) is a non-governmental organisation, working towards child upliftment and women empowerment. It provides quality education and nutrition to underprivileged children and generates employment for women.
                    </p>
                </div>
                <div className="contactinfo-footer">
                    <h2>Contact Us</h2>
                    <div id="headerPhone hi"><i className="fa-solid fa-phone-flip"> <a href="tel:885-175-5256"></a></i> 885-175-5256</div>
                    <div id="headerMail hi"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com" style={{color:"#656565",textDecoration:"none"}}>spwf.ngo@gmail.com</a></div>
                    <div id="headerLoc hi"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
                    
                </div>
               
                <div className="social-media-footer">
                    <h2>Social Media</h2>
                    <div className="socialMedia-footer">
                        <a href="https://www.instagram.com/shakuntalapoddar_ngo/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/shakuntalapoddarngo"><i className="fa-brands fa-facebook"></i></a>
                       <a href="https://twitter.com/shakuntalango"> <i className="fa-brands fa-twitter"></i></a>
                       <a href="https://www.linkedin.com/company/shakuntala-poddar-welfare-foundation/"><i className="fa-brands fa-linkedin"></i></a> 
                    </div>
                </div>
                <div className="tags-footer">
                    <h2>Useful Links</h2>
                    <div>

                    {/* <Link to={'/aboutUs'}></Link> */}
                    <Link to={'/aboutUs'}><p className="footerp">About Us</p></Link>
                    <Link to={'/contactUs'}><p className="footerp">Contact Us</p></Link>
                  
                    <Link to={'/volunteer'}><p className="footerp">Volunteer</p></Link>
                    <Link to={'/donation'}><p className="footerp">Donation</p></Link>
                    <Link to={'/login'}><p className="footerp">Admin Login</p></Link>
                    <a class="p" className="footerp" href="#popup3">Privacy Policy</a>
                    <div id="popup3" class="overlay">
	                <div class="popup">
		                    <h2>Privacy Policy</h2>
		                    <a class="close" href="#">&times;</a>
		                    <div class="content">
			                <p>We at shakuntala poddar welfare foundation respect the information that is provided to us and ensure that the information does not go in wrong hands. Also, it is necessary for the person to provide correct verification source to be a volunteer or to provide donation</p>
		                    </div>
	                    </div>
                    </div>

                    </div>
                    
                </div>
                
            </div>
            <div className="lowerFooter">
            <div className="lfcol1">
            <div className="lfooterrow1">
                    <a class="p" className="footerp" href="#popup1">Refund Policy</a>
                    <div id="popup1" class="overlay">
	                <div class="popup">
		                    <h2>Refund Policy</h2>
		                    <a class="close" href="#">&times;</a>
		                    <div class="content">
			                <p>Amount once paid through the payment gateway shall not be refunded other than in the following circumstances: • Multiple times debiting of Customer’s Card/Bank Account due to technical error OR Customer's account being debited with excess amount in a single transaction due to technical error. In such cases, excess amount excluding Payment Gateway charges would be refunded to the Customer. • Due to technical error, payment being charged on the Customer’s Card/Bank Account but the enrolment for the examination is unsuccessful. Customer would be provided with the enrolment by NISM at no extra cost. However, if in such cases, Customer wishes to seek refund of the amount, he/she would be refunded net the amount, after deduction of Payment Gateway charges or any other charges.</p>
		                    </div>
	                    </div>
                    </div>
                    <p>|</p>
                    <a class="p" className="footerp" href="#popup2">Terms & Conditions</a>
                    <div id="popup2" class="overlay">
	                <div class="popup">
		                    <h2>Terms & Condition</h2>
		                    <a class="close" href="#">&times;</a>
		                    <div class="content">
			                <p>We at shakuntala poddar welfare foundation work for the welfare of underprivileged people and children. We make sure that they a a proper meal and ensure there skill development.<br/> How do we collect information-Basically we have three mediums of collecting information Donation form :<br/> People donating any amount need to fill like their names, address, phone number, Pan number Contact form : People can leave their message through this portal Volunteer form : People wishing to volunteer for our NGO can fill this form  including details like name, qualification, area of interest, address, Phone number</p>
		                    </div>
	                    </div>
                    </div>
                </div>
                <div className="lfooterrow2">
                    <p>Copyright © 2022 Shakuntala poddar welfare foundation.</p>
            </div>
            </div>
            <div className="lfcol2">
                <Link to='/'><img className="footerlogo" src={logo}/></Link>
            </div>
            </div>
        </footer>
    )
}
export default Footer;