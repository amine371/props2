import React from 'react';
import profil  from './profile/profile';
import './App.css';

function App() {
  return (
    <profil 
    fullname="amine" 
      pre="aaaaaa"
      >
        <img src ="img"
         alt ="amine.jpg"/>
        </profil>

  );
}
profil.proptypes={
  fullname:proptypes.chaine,
  pre:proptypes.chaine,
}


export default App;
