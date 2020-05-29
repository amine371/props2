import react from "react";
import proptype from "prop-types";
const profile =(props)=>{
    const handlename=()=>{
        alert("profil:${props.fullname}");

    }
    return(
        <div style={{margin:40}}>
            <h1 style={{textTransform:'uppercase'}}>{props.nom complet}</h1>
            <div style={{color:'red'{accessoires.profession}}}>
                <div style={{display:'flex'}}>
                    <p style ={{color:'red'}}>{accessoires.bio}</p>
                    {accessoires.enfants}
            </div>
            < A  href = "#"  onclick = { handleName } de  style = { {    couleur : 'red'     } }  > Cliquez ici < / a >
            Profil . defaultProps  =  {
    fullName : "pas de  Nom" , 
    bio : "Pas de biographie" , 
    profession : "Pas de profession" ,
        < / div >
    )
    }

}
export default profile;
