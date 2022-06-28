import React from 'react'; 
import './Project.css';
import {motion} from 'framer-motion'; 


const Project = (props) => {
    return ( 
        <motion.div className='proyect_Card'
             whileHover={{ scale: 1.3 }}
             transition={{ duration: 0.5 }}
        >        
            <img src={props.img}/>
            <a href={props.link} className='project-Button' target="_blank"><button >{props.name}</button></a>
        </motion.div>                
    );
};

export default Project; 