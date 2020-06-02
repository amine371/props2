import react from "react";
import PropTypes from "PropTypes";
 const profile =(props)=>{
    const handleName=()=>{
        alert("profil:${props.fullName}");

    }
    return(
        <div style={{margin:40}}>
            <h1 style={ { textTransform :'uppercase'}}>{props.fullName}</h1>
            <div style={{color:'red'}}>{props.profession}</div>
                <div style={{display:'flex'}}</div>
            <p style ={{color='red'}}>{props.bio}</p>
             {props.children}
     </div>
            <a href="#" onClick={handleName} type={{color:'red'}}> Click</a>
    )
    }
  Profile.defaultProps = {
    fullName: "No Name", 
    bio: "No Biography", 
    profession: "No Profession",
    <img src = {amine.jpg} alt = "amine.jpg"/>
}
export default profile;
