
import './AboutUsImage.css'
function AboutUsImage(props){

    return(
        <div className="AboutUsImage" style={{backgroundImage:`url(${props.image})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',textAlign:'center',height:'325px'}}>
            <h1 style={{color:'white',paddingTop:'100px',}}>{props.heading}</h1>
        </div>
    )
}
export default AboutUsImage;