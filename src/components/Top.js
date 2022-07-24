import React, { useState } from 'react'; 
import './Top.css'; 
import images from './images/images';
import Subtitle from './Subtitle';
import NavBar from './NavBar';
import Toggle from './Toggle';


const Top = (props) => {
    
    return (         
        <div className='wrapperTop'>
            {/* <NavBar 
            language={props.language}
            /> */}
            <Toggle
                language={props.language}
                isToggled={props.isToggled}
                onToggle={props.onToggle}
                changeLanguage={props.changeLanguage}
              /> 
                    
            <div className='header_Card'> 
                <div className='top_Title'>
                    <h2 className='top_Title_h2'>{props.language === 'ENGLISH' ?  'PORT' : 'PORTA'}<span className='top_Title_span'>FOLIO</span></h2>
                </div>

                <div className='header_Img'>
                    <div className='header_Igm_shade'>
                        <img className='imagen' src={images.profile}/>
                    </div>                    
                </div>

                <div className='header_Items'>                    
                    {/* <h2>{props.language === 'ENGLISH' ?  'Hello!.' : 'Hola!.'}</h2> */}
                    <h1>{props.language === 'ENGLISH' ?  "Hello! I'm": 'Hola! Soy'} Johana López</h1>
                    <h3>{props.language === 'ENGLISH' ?  'Front-End Web Developer' : 'Desarrolladora de Software Front End'}</h3>
                    
                </div>

                
            </div> 

            <div className='media'>                            
                    <a href='https://github.com/' target="_blank"><img src={images.img14} /></a>
                    <a href='https://www.linkedin.com/' target="_blank"><img src={images.img28} className='media2'/></a>
                </div>

        </div>
    )
}

export default Top; 

