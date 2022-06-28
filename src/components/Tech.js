import React from 'react';
import './Tech.css'; 

const Tech = (props) =>{
    return(
        <div className='tech_Card'>
            <img src={props.img} className='tech_Img'/>
        </div>
    )
}

export default Tech; 
