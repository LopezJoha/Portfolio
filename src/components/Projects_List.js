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


// const PROJECTS = ([
//     {
//         id:'1',
//         name:'Chowé', 
//         img: images.img23,
//         link:"http://www.chowe.co/",
//         // imgButton: images.expand
//     },
//     {
//         id:'2',
//         name:'Beyond the Experience', 
//         img:images.img24,
//         link:"https://beyondthexperience.com/", 
//         // imgButton: images.expand    
//     }

// ]);


// const Project_List = (props) => {  
// return(
//     <div className='proyect_Container'>
//         {PROJECTS.map((project) => {
//             return (
//                 <Project
//                     key={project.id}
//                     name={project.name}
//                     img={project.img}
//                     link={project.link}  
//                     funcion={props.funcion}                                                           
//                 />
            
//             )
//         })}
//     </div>
// );

// }; 