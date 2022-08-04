import {useEffect, useState} from 'react'
import LoadingSpinner from '../../UI/Loading';
import ShowContactUsData from './ShowContactUsData';
import style from './ShowContactUsDataMain.module.css'
function ShowContactUsDataMain(){
    const [loadedData,setLoadedData] = useState([]);
    const [isLoading,setIsLoading] =useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
       getData();
    },[])

   async function getData(){
    setIsLoading(true);
    setError(null);

    
    try{
        const response =await fetch("/getContactUs")
    
        if(!response.ok){
            throw new Error('Something Went Wrong!')
        }
        const data= await response.json();
        const LoadContactUs= [];

        for(let key in data){
            LoadContactUs.push({
                id:key,
                name:data[key].name,
                phone:data[key].phone,
                email:data[key].email,
                subject:data[key].subject,
                message:data[key].message
            })
            LoadContactUs.reverse();
            setLoadedData(LoadContactUs);
            }
        console.log(loadedData)
    }
    catch(error){
        setError(error.message);
    }
    setIsLoading(false);
}
    return(

        <div className={style.main}>
            {isLoading && <LoadingSpinner/>}
            {error && <p>{error}</p>}
            
             {!isLoading && loadedData.map((data)=>
            <ShowContactUsData name= {data.name} phone={data.phone} email={data.email} subject={data.subject} message={data.message} />
            )}
        </div>
 

    )
}
export default ShowContactUsDataMain;