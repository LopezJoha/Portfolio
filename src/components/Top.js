import React, { useState } from 'react'; 
import './Top.css'; 
import images from './images/images';
import Subtitle from './Subtitle';


const Top = (props) => {
    if (props.language === 'ENGLISH'){
        return (         
            <section>
              <div className='top_Title'>
                    <h2 className='top_Title_h2'>
                    PORT
                    <span className='top_Title_span'>
                    &nbsp;FOLIO
                    </span>
                    </h2>
                </div>
                <div className='header_Card'>
                    <div className='header_Content'>
                        <div className='header_Img'>
                            <img src={images.img5}/>
                        </div>
                        <div className='header_Items'>
                            <h2>Hello!!</h2>
                            <h1>I'm Johana López </h1>
                            <h3>Software Developer Front End</h3>
                            <p>Find me on:</p>
                            <div className='media'>                            
                                <a href='https://github.com/' target="_blank"><img src={images.img14} /></a>
                                <a href='https://www.linkedin.com/' target="_blank"><img src={images.img28} className='media2'/></a>
                            </div>                     
                            
                        </div>    
    
                    </div>
                </div>
            </section>
        ) 
    } else {
        return (           
            <section>
              <div className='top_Title'>
                    <h2 className='top_Title_h2'>
                    PORTA
                    <span className='top_Title_span'>
                    &nbsp;FOLIO
                    </span>
                    </h2>
                </div>
                <div className='header_Card'>
                    <div className='header_Content'>
                        <div className='header_Img'>
                            <img src={images.img5}/>
                        </div>
                        <div className='header_Items'>
                            <h2>Hola!!</h2>
                            <h1>Soy Johana López </h1>
                            <h3>Desarrolladora de Software Front End</h3>
                            <p>Encuéntrame en:</p>
                            <div className='media'>                            
                                <a href='https://github.com/' target="_blank"><img src={images.img14} /></a>
                                <a href='https://www.linkedin.com/' target="_blank"><img src={images.img28} className='media2'/></a>
                            </div>                     
                            
                        </div>    
    
                    </div>
                </div>
            </section>
        )
    }


    

}

export default Top; 