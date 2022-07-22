import './App.css';
import React from 'react';
import {useState} from 'react'; 

import Top from './components/Top';
import Title from './components/Title'; 
import Subtitle from './components/Subtitle';
import Project_List from './components/Projects_List';
import Design_Skills from './components/Design_Skills';
import Programm_Skills from './components/Programm_Skills';
import Button from './components/Button';

import images from './components/images/images';
import ModalPopUp from './components/ModalPopUp';
import Data from './components/Data';
import Toggle from './components/Toggle';



function App() {  
 
  const [language, setLanguage] = React.useState('ENGLISH');

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [projectToShow, setProjectToShow] = React.useState(false);
  const[isToggled, setIsToggled] = React.useState(false)


  function changeLanguage(){
    if (language === 'ENGLISH') {
      setLanguage('SPANISH')
    } else{
      setLanguage('ENGLISH')
    }
  } 

  return ( 
    <div className='Container'>         
     
      <Toggle
        isToggled={isToggled}
        onToggle={()=> setIsToggled(!isToggled)} 
        language={language}
        changeLanguage={changeLanguage}
      />            

     <Top language={language}/>

      <Title 
        title={language === 'ENGLISH' ?  "WEB DEVELOPER" :"DESARROLLADORA WEB"}/>
      
      <Subtitle 
        word1={ language === 'ENGLISH'  ? "A little bit" :"" }
        word2={language === 'ENGLISH'  ?  "   about me...": "   acerca de mi..."}/>

      <Title 
        title= {language === 'ENGLISH' ? "SKILLS" :"HABILIDADES" }
      />
      <Subtitle 
        word1={ language === 'ENGLISH' ? "Design": "En"  }
        word2={language === 'ENGLISH' ? "Skills" : "Diseño"}                  
      />
      <Design_Skills/>

      <Subtitle 
        word1={ language === 'ENGLISH' ? "Programming" : "En"}
        word2={language === 'ENGLISH' ? "Skills" : "Programación " }       
      />
      <Programm_Skills />

      <Title 
        title= {language === 'ENGLISH' ? "PROYECTS" : "PROYECTOS"}
      />
      <Project_List 
          Data={Data}    
          modalIsOpen={modalIsOpen}    
          funcion={setIsOpen} 
          funcion2={setProjectToShow}         
        
      />
      
      <ModalPopUp
        modalIsOpen={modalIsOpen}
        isOpen={false}
        setIsOpen={setIsOpen}
        selectedProject={projectToShow}    
      />
    </div>    
  );
};

export default App;



