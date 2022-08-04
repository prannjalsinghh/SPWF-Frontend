import './volunteerBox.css'
import React, { useState,useEffect } from "react";
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const VolunteerForm = ()=>{
    const [Name,nameSetHandler]= useState('');
    const [Email,emailSetHandler]= useState('');
    const [Phone,phoneSetHandler]= useState('');
    const [ZipCode,zipSetHandler] =useState('');
    const [isVald,formValidator] = useState(true);
    const [sent,setValueSent] =useState(true);

    useEffect(()=>{
 
         setTimeout(()=>{
             setValueSent(true);
         },3000)
 
    },[sent])

    const nameHandler=(event)=>{
        formValidator(true);
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        formValidator(true);
        emailSetHandler(event.target.value);      
    }
    const phoneHandler=(event)=>{
        formValidator(true);
        phoneSetHandler(event.target.value)
    }
    const zipHandler= (event)=>{
        formValidator(true);
        zipSetHandler(event.target.value);
    }

    function volunteerFormSubmitHandler(event){
        event.preventDefault();
        console.log()

        let volunteerType= [];

        for(let i in document.getElementsByName("volunteerType")){
            if(document.getElementsByName("volunteerType")[i].checked === true){
                volunteerType.push(document.getElementsByName("volunteerType")[i].value);
            }
        }
        console.log(volunteerType);
        if(Name.trim().length==0 || Email.trim().length==0|| !Email.includes('@') ||Phone.trim().length==0  || ZipCode.trim().length==0 ||volunteerType.length===0){
            formValidator(false);
            return;
        }
        const obj = {
            name:Name,
            email:Email,
            phone:Phone,
            Zip:ZipCode,
            volunteerType:volunteerType
        }
        addVolunteerData(obj);

    }
    function addVolunteerData(obj){
        
        axios.post("/createVolunteer",obj)
        setValueSent(false);

        nameSetHandler('');
        phoneSetHandler('');
        emailSetHandler('');
        
        zipSetHandler('');
    }

    return(
        <React.Fragment>
            <Header/>
            <br/>
            <br/>
        <div className="volunteerBox">
            <div className="volunteerBoxLeft">
                <h4>JOIN WITH US</h4>
                <h1>Take One Step Further To Become A Proud Volunteer!</h1>
                <p>Wherever you turn, you can find someone who needs you. Even if it is a little thing, do something for which there is no selfishness but the privilege of doing it. Remember, you don’t live in the world all of your own.</p>
            </div>
            <form className="volunteerBoxRight" onSubmit={volunteerFormSubmitHandler}> 
            { !isVald && <div style={{backgroundColor:"rgb(248, 126, 126)",textAlign:"center",width:"35%",marginTop:"5%",marginLeft:"30%"}}>
                Please enter Valid Details
            </div>} 
                    <input type="text" placeholder="Enter Name" onChange={nameHandler} value={Name} />
                    <input type="email" placeholder="Enter Email" onChange={emailHandler} value={Email}/>
                    <div className='volrow'>
                        <input type="text" placeholder="Enter Phone*" onChange={phoneHandler} value={Phone}/>
                        <input type="text" placeholder="Zip Code*" onChange={zipHandler} value={ZipCode}/>
                    </div>
                    <div>
                    <div className='VolunteerType'>
                    <div>
                        <input type="checkbox" id="Teaching" name="volunteerType" value="Teaching" />
                        <label for="Teaching">Teaching </label>
                    </div>
                    <div>
                        <input type="checkbox" id="WebDesigning" name="volunteerType" value="Web Designing" />
                        <label for="WebDesigning">Web Designing</label>
                    </div>
                    <div>
                        <input type="checkbox" id="GraphicsDesigning" name="volunteerType" value="Graphics Designing" />
                        <label for="GraphicsDesigning">Graphics Designing</label>
                    </div>
                    <div>
                        <input type="checkbox" id="ContentWriting" name="volunteerType" value="Content Writing" />
                        <label for="ContentWriting">Content Writing</label>
                    </div>    
                    
                    </div>
                    {!sent && <div style={{backgroundColor:"rgb(162, 242, 162)",textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-around",borderRadius:"20px"}}>
                    <p style={{padding:"0.5rem"}}>Your Data has been successfully recorded.</p>
                       
                    </div>}
                    </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </React.Fragment>
    )
}

export default VolunteerForm;