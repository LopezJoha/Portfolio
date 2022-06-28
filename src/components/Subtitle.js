import React from 'react'; 
import './Subtitle.css';


const Subtitle  = (props) => {
    return (
        <h3 className='subtitle_h3'>{props.word1 +'\n'}<span>{props.word2}</span></h3>
    )
}

export default Subtitle; 