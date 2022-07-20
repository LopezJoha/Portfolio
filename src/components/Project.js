import React from 'react'; 
import './Project.css';



const Project = ({img, link, name, funcion, funcion2, modalIsOpen }) => {

    const doFunctions = () => {
        funcion(!modalIsOpen);
        funcion2({
            img: img,
            link: link,
            name: name,
        });
    }

    return ( 
        <div className='proyect_Card' onClick={doFunctions}>        
            <img src={img}/>
            <a href={link} className='project-Button' target="_blank"><button >{name}</button></a>
        </div>                
        
    );
};

export default Project; 