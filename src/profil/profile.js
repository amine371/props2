import react from "react";
import proptypes from "prop-types";
 const profil =(props)=>{
    const handleName=()=>{
        alert("profil:${props.fullname}");

    }
    return(
        <div style={{margin:40}}>
            <h1 style={ { textTransform :'uppercase'}}>{props.fullname}</h1>
            < div style={{color:'red'{ accessoires.profession}}}>
                <div style={{display:'flex'}}>
            <p style ={{color='red'}}>{accessoires.bio}</p>
             {props.children}
     </div>
            <a href="#" onclick={handleName} type={{couleur:'red'}}> Click</a>
    Profil. defaultProps={
    nom complet:"pas de Nom", 
    bio:"Pas de biographie", 
    profession:"Pas de profession",
        </div>
    )
    }

}
export default profil;
