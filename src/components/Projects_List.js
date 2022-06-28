
import React, {useState} from 'react'; 
import Project from './Project';
import ProjectsListcss from './Projects_List.css';
import images from './images/images';


const Project_List = () => {
    const [projects, setProjects] = useState ([
        {
            id:'1',
            name:'Chowé', 
            img:images.img23,
            link:"http://www.chowe.co/"
        },
        {
            id:'2',
            name:'Beyond the Experience', 
            img:images.img24,
            link:"https://beyondthexperience.com/"            
        }

    ]);

    return(
        <div className='proyect_Container'>
            {projects.map((project) => {
                return (
                    <Project
                    key={project.id}
                    name={project.name}
                    img={project.img}
                    link={project.link}/>
                )
            })}
        </div>
    );

}; 

export default Project_List;