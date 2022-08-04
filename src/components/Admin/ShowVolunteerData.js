function ShowVolunteerData(props){

    return(
        <div style={{backgroundColor:"rgb(185, 181, 181)"}}>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.zip}</p>
        </div>
    )
}

export default ShowVolunteerData;
