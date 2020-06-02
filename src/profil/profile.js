import react from "react";
import proptypes from "prop-types";
 const profil =(props)=>{
    const handleName=()=>{
        alert("profil:${props.fullname}");

    }
    return(
        <div style={{margin:40}}>
            <h1 style={ { textTransform :'uppercase'}}>{props.fullname}</h1>
            < div style={{color:'red'{props.profession}}}>
                <div style={{display:'flex'}}>
            <p style ={{color='red'}}>{props.bio}</p>
             {props.children}
     </div>
            <a href="#" onlick={handleName} type={{couleur:'red'}}> Click</a>
     Profile.defaultProps = {
    fullName: "No Name", 
    bio: "No Biography", 
    profession: "No Profession",
    img: <img src = {amine.jpg} alt = "amine.jpg",

    )
    }

}
export default profil;