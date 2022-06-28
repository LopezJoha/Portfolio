import './App.css';
import React, { Component } from 'react'; 
import Top from './components/Top';
import Title from './components/Title'; 
import Subtitle from './components/Subtitle';
import Project_List from './components/Projects_List';
import Design_Skills from './components/Design_Skills';
import Programm_Skills from './components/Programm_Skills';
import {useState} from 'react'; 
import images from './components/images/images';
import Button from './components/Button';
// import Button from './components/Button';

function App() {
  
  const [language, setLanguage] = useState('ENGLISH');
 

  return ( 
    <div className='Container'>  
      <Button
        funcion={() => setLanguage("SPANISH")}
        image= {images.imgCol64}
        // Español
      />
      <Button
        funcion={() => setLanguage("ENGLISH")}
        image= {images.imgUsa64}
      />
     

      <Top language={language}/>
      <Title 
        title={language === 'ENGLISH' ?  "WEB DEVELOPER" :"DESARROLLADORA WEB" }        
      />
      <section className='secondSection'>
        <div className='card1'> 
          <img src={images.img29}/>       
        </div>
        <div className='card2'>
          <div className='card2-a'>        
            <Subtitle 
              word1={ language === 'ENGLISH'  ? "A little bit" :"Un poquito" }
              word2={language === 'ENGLISH'  ?  "   about me...": "   acerca de mi..."  }
            />
          </div>
          <div className='card2-b'>
            <p></p>            
          </div>
        </div>     
                  
      </section>       
           
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
      <Project_List/>       
    </div>    
  );
}

export default App;

