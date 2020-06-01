import react from "react";
import proptype from "prop-types";
 const profile=(props)=>{
    const  handlename=()=>{
        alert ("profil:${props.fullname}");

    }
    return(
        <div style={{margin:40}}>
            <h1 style={ { textTransform :'uppercase'}}>{props.fullname}</h1>
            < div style={{color:'red'{ accessoires.profession}}}>
                <div style={{display:'flex'}}>
                    <p style ={{color='red'}}>{accessoires.bio}</p>
                    {accessoires.enfants}
            </div>
            <a href="#" onclick={handleName} type={{couleur:'rouge'}}> Click</a>
            Profil. defaultProps={
    nom complet : "pas de Nom", 
    bio:"Pas de biographie", 
    profession:"Pas de profession",
        </div>
    )
    }

}
export default profil;