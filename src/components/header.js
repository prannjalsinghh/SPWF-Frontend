import  './header.css';
import { useState } from "react";
import logo from '../images/spwf logo2.png';
import { Fragment } from 'react';
import {Link} from 'react-router-dom'

// document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-sort-down"></i>';
// document.getElementsByClassName('dropbtn')[0]

var count = 0;

function slide(){
    document.getElementsByClassName('slidemenu')[0].style.top = "0px";
    document.getElementsByTagName('body').style.position = "fixed";
}
function slideup(){
    document.getElementsByClassName('slidemenu')[0].style.top = "-500px";

}
function slideright(){
    document.getElementsByClassName('slidemenu2')[0].style.left = "100%";
}
function sliderleft(){
    document.getElementsByClassName('slidemenu2')[0].style.left = "40%";
}


function mainmenuslide(){
    if(count%2==1){
        document.getElementsByClassName('slidemenu')[0].style.height = "auto";
        document.getElementsByClassName('slidedowncont')[0].style.display = "flex";
    }else{
        document.getElementsByClassName('slidedowncont')[0].style.display = "none";
    }
}
function counter(){
    count++;
    mainmenuslide();
    document.getElementById('toggle').toggleClass('fa-sort-down fa-caret-up');
}

const Header = ()=>{
    function run(){
        if(isHovering){
            document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-sort-down"></i>';
        }else{
            document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-caret-up"></i>';
        }
    }


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
    setIsHovering(true);
    run();
    };

    const handleMouseLeave = () => {
    setIsHovering(false);
    run();
    };

    return (
        <Fragment>
            <header>
        <div className="headerLeft">
        <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> <a href="tel:885-175-5256">885-175-5256</a></div>
        <div id="headerMail"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com">spwf.ngo@gmail.com</a></div>
        <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
        </div>
        <div className="headerRight">
            <a href="https://www.instagram.com/shakuntalapoddar_ngo/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/shakuntalapoddarngo"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/shakuntalango"> <i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/shakuntala-poddar-welfare-foundation/"><i className="fa-brands fa-linkedin"></i></a> 
        </div>
        <div className="topmenu">
        <div style={{display:"flex",flexDirection:'row',justifyContent: 'center',alignItems: 'center', gap: '10px'}} onClick={sliderleft}><i class="fa-solid fa-bars" ></i>
        <h2>TOP MENU</h2></div>
        <div className='slidemenu2'>
            <i class="fa-solid fa-xmark" onClick={slideright}></i>
            <br/>
            <Link to="/donation"><button>Donate Now</button></Link>
            <br/>
            <br/>
            <br/>
            <div className='topmenucontact'>
            <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> <a href="tel:885-175-5256">885-175-5256</a></div>
            <br/>
            <div id="headerMail"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com">spwf.ngo@gmail.com</a></div>
            <br/>
            <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar, New Delhi-110059</div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='topmenusocialicons'>
                <a href="https://www.instagram.com/shakuntalapoddar_ngo/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/shakuntalapoddarngo"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/shakuntalango"> <i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/shakuntala-poddar-welfare-foundation/"><i className="fa-brands fa-linkedin"></i></a> 
            </div>
            <br/>
            <br/>
            <div className='categories'>
                <h4>Categories</h4>
                <Link to={"/donation"} style={{color: "black"}}><a>Donation</a></Link>
                <Link to={"/volunteer"} style={{color: "black"}}><a>Volunteer</a></Link>
            </div>
        </div>
        </div>
            </header>
            <nav className='navbar-default'>
        <div className="navLeft">
           <Link to="/"><img src={logo} className="navbarLogo" alt="no img"/></Link>
           </div>
        <div className="navRight">
        <Link to={'/'}><a>Home</a></Link>
        <Link to={'/aboutUs'}><a>About us</a></Link>
        <Link to={'/volunteer'}><a>Volunteer</a></Link>
        <div class="dropdown">
        <a class="dropbtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Events<i class="fa-solid fa-sort-down"></i></a>
        <div class="dropdown-content" >
            <Link to={'/Shiksharth'}><a>Shiksharth</a></Link>
            <Link to={'/KaushalUthan'}><a>Kaushal Uthan</a></Link>
            <Link to={'/Chikitsa'}><a>Chikitsa</a></Link>
            <Link to={"/Aahar"}><a>Aahar</a> </Link>
        </div>
        </div>
        <Link to={'/contactUs'}><a>Contact Us</a></Link>
        <button><Link to={'/donation'}>Donate Now</Link></button>
        </div>
        <div className="mainmenu">

        <div style={{display:"flex",flexDirection:'row',justifyContent: 'center',alignItems: 'center', gap: '10px'}} onClick={slide}><i class="fa-solid fa-bars" ></i>
        <h2>MENU</h2></div>
        <div className='slidemenu'>
            <i class="fa-solid fa-xmark" onClick={slideup}></i>
            <div className='slidemenucontent'>
                <Link to={'/'}><a>Home</a></Link>
                <Link to={'/aboutUs'}><a>About us</a></Link>
                <Link to={'/volunteer'}><a>Volunteer</a></Link>
                <a className='slidemenuevents' onClick={counter}>Events<i class="fa-solid fa-sort-down" id='toggle'></i></a>
                    <div class="slidedowncont" >
                    <Link to={'/Shiksharth'}><a>Shiksharth</a></Link>
                    <Link to={'/KaushalUthan'}><a>Kaushal Uthan</a></Link>
                    <Link to={'/Chikitsa'}><a>Chikitsa</a></Link>
                    <Link to={"/Aahar"}><a>Aahar</a> </Link>
                    </div>
                <Link to={'/contactUs'}><a>Contact Us</a></Link>
                <button><Link to={'/donation'}>Donate Now</Link></button>
            </div> 
        </div>
        </div>
            </nav>
        </Fragment>
    );
}
export default Header;