import Header from "../components/header";
import Footer from "../components/footer";
import AboutUsDescription from '../components/AboutUsDescription'
import AboutUsGetInvloved from '../components/AboutUsGetInvolved'
import AboutUsImage from '../components/AboutUsImage'
import Aimbox from "../components/Aimbox";
import Goalbox from "../components/Goalbox";
import aboutUsImage from '../img/IMG-20200118-WA0022.jpg'


function AboutUsPage(){
    return(
        <div>
            <Header/>
            <AboutUsImage heading="ABOUT US" image={aboutUsImage}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <AboutUsDescription />
            <br/>
            <br/>
            <Aimbox />
            <br/>
            
            <Goalbox/>
            <br/>
            <br/>
            <AboutUsGetInvloved />
            <Footer/>
        </div>
    )
}
export default AboutUsPage;