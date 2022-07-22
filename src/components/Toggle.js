import React from 'react';
import './Toggle.css';


function Toggle({isToggled, onToggle, language, changeLanguage}) {

    return (
        <form>
            <label className='switch' >
            <input type='checkbox' id='checkbox' checked={isToggled} onChange={onToggle} language={language} onClick={changeLanguage}></input>
            <span className='slider' ></span>        
            </label>
        </form>
    )
}

export default Toggle;