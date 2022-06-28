import React, {useState} from 'react'; 
import Tech from './Tech';
import Skills from './Skills.css'; 
import images from './images/images';

const skills = [
    {
        id:'1',
        name:'Javascript',
        img:images.img17
    },
    {
        id:'2',
        name:'Wordpress',
        img:images.img22
    }, 
    {
        id:'3',
        name:'Html',
        img:images.img15
    },
    {
        id:'4',
        name:'Css',
        img:images.img7
    },
    {
        id:'5',
        name:'Git',
        img:images.img12
    },
    {
        id:'6',
        name:'Mysql',
        img:images.img19
    }
];


const Programm_Skills = () =>{    

    return (
    <div className='container_Skills'>
        {skills.map((skill) => {
            return (              
                <Tech 
                    key={skill.id}
                    img={skill.img}
                />                
            )
        })}
    </div>
    )
}

export default Programm_Skills; 
