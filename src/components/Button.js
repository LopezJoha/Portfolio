import React from 'react';
import './Button.css';



function Button(props) {
  // let sectionStyle = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: "url(" + { Background } + ")"
  // };

  return(
    
    <button className="btn-language" type="button" onClick={props.funcion} style={{backgroundImage:`url(${props.image})`}}></button>
    
  );
}

export default Button;
