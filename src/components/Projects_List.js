import Project from './Project';
import ProjectsListcss from './Projects_List.css';


const Project_List = (props) => {
    
    return(
        <div className='proyect_Container'>
            {props.Data.map((project) => {
                return (
                    <Project
                        key={project.id}
                        name={project.name}
                        img={project.img}
                        link={project.link}  
                        funcion={props.funcion} 
                        funcion2={props.funcion2}                                                           
                        modalIsOpen={props.modalIsOpen}                                
                    />
                )
            })} 
        </div>
    );
}; 

export default Project_List;
