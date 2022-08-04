import { useEffect, useState } from "react";
import ShowVolunteerData from './ShowVolunteerData';
import LoadingSpinner from "../../UI/Loading";

function ShowVolunteerDataMain(){

    const [FinalData,FinalDataSet] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        setIsLoading(true);
        setError(null);
        
    try{
        
        const response = await fetch("/getVolunteer");
        if (!response.ok) {
            throw new Error('Something went wrong!');
          }

        const data = await response.json();

        let loadedData=[];

        for(let key in data){
            loadedData.push({
                name:data[key].name,
                phone:data[key].phone,
                email:data[key].email,
                zipcode: data[key].Zip
            })
        }
        loadedData.reverse();
        FinalDataSet(loadedData);
        console.log(FinalData)
    }
    catch(error){
        setError(error.message);
    }
    setIsLoading(false);
        
    }



    return(
        <div>
            {isLoading && <LoadingSpinner />}
            {error && <p>{error}</p>}
            
            {FinalData.map((data)=>
            <ShowVolunteerData name={data.name} email={data.email} phone={data.phone} zip={data.zipcode} />
            )}
        </div>
    )
}
export default ShowVolunteerDataMain;