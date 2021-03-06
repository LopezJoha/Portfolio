import React from 'react';
import './Button.css';


function Button(props) {
  return(    
    <button className="btn-language" type="button" onClick={props.funcion} style={{backgroundImage:`url(${props.image})`}}></button>
  );
}


export default Button;