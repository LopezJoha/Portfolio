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



function App() {  
 
  const [language, setLanguage] = React.useState('ENGLISH');

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [fruta, setFruta] = React.useState(false);



  // const [modal, setModal] = React.useState(Data);
 

  return ( 
    <div className='Container'>  
        <Button
          funcion={() => setLanguage("SPANISH")}
          image= {images.imgCol64}/>

        <Button
          funcion={() => setLanguage("ENGLISH")}
          image= {images.imgUsa64}/>      

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
        word1={ language === 'ENGLISH' ? "Design": "Habilidades en"  }
        word2={language === 'ENGLISH' ? "Skills" : "Diseño"}                  
      />
      <Design_Skills/>

      <Subtitle 
        word1={ language === 'ENGLISH' ? "Programming" : "Habilidades en"}
        word2={language === 'ENGLISH' ? "Skills" : "Programación " }       
      />
      <Programm_Skills />

      <Title 
        title= {language === 'ENGLISH' ? "DESIGN RESPONSIVE" :"DISEÑO RESPONSIVO"}
      />
      <Title 
        title= {language === 'ENGLISH' ? "PROYECTS" : "PROYECTOS"}
      />
      <Project_List 
          Data={Data}    
          modalIsOpen={modalIsOpen}    
          funcion={setIsOpen} 
          funcion2={setFruta}         
        
      />
      
      <ModalPopUp
        modalIsOpen={modalIsOpen}
        isOpen={false}
        setIsOpen={setIsOpen}
        selectedProject={fruta}    
      />
    </div>    
  );
}

export default App;



