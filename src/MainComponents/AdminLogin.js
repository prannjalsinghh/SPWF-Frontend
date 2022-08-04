import React, { useState } from "react"
import styles from './login.module.css'
import Admin from "../components/Admin/admin";
import {Link, useNavigate} from 'react-router-dom';

import ShowContactUsDataMain from '../components/Admin/ShowContactUsDataMain'
import LoadingSpinner from "../UI/Loading";
import Header from "../components/header";
import Footer from "../components/footer";



function AdminLogin(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [usernameCheck,falseUsername] = useState(null);
    const [passwordCheck,falsePassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
 


    const usernameHandler = (event)=>{
        falseUsername(null);
        falsePassword(null);
        setUsername(event.target.value);
    }
    const passwordHandler = (event)=>{
        falseUsername(null);
        falsePassword(null);
        setPassword(event.target.value);
    }
      
    async function LoginSubmitHandler (event){
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try{
            const response = await fetch("/getUser");
            
            if(!response.ok){
                throw new Error('Something Went Wrong!');
            }
        const data= await response.json();

        for(let key in data){
            if(data[key].username === username){
                if(data[key].password === password){
                    setLogin(true);    
                }
                else{
                   
                    falsePassword(true);
                    setPassword('');
                }
            }
            else{
                falseUsername(true);
                falsePassword(true);
                setUsername('');
                setPassword('');
            }
        }
        }
        catch{
            setError(error.message)
        }
        
        setIsLoading(false);
        
        
    }
    
     
    return(
   
        <div className={styles.main}>
            <Header/>
            { passwordCheck && <div style={{backgroundColor:"rgb(248, 126, 126)",textAlign:"center",width:"35%",marginTop:"5%",marginLeft:"30%",height:"60px"}}>
                Please enter Valid Credentials
            </div>}
            <br/>
            <br/>
            {!isLoggedIn && <form onSubmit={LoginSubmitHandler}>
                <input type="text" placeholder="Username" onChange={usernameHandler} className={usernameCheck && styles.error} value={username}/>
                <input type="password" placeholder="password" onChange={passwordHandler} className={passwordCheck && styles.error} value={password}/>
                {isLoading && <LoadingSpinner/>}
                <button type="submit" >Login</button>
            </form> }
           
            {error && <p>Error</p>}
             {isLoggedIn && <Admin checkLogin={isLoggedIn}/>}
             
        </div>
   
    )
}
export default AdminLogin;