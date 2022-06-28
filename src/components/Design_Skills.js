import React, {useState} from 'react'; 
import Tech from './Tech'; 
import Skills from './Skills.css'; 
import images from './images/images'; 

const skills = [
    {
        id:'1',
        name:'Adobe',
        img:images.img6
    },
    {
        id:'2',
        name:'Figma',
        img:images.img11
    }
]

const Design_Skills = () => {

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

export default Design_Skills; 