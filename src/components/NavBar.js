import React from 'react'

function NavBar(props) {

    const styles = {
        width: '40vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center', 
        listStyle: 'none', 
        position: 'fixed', 
        top: '0', 
        right: '1%',
        color: 'white', 
        cursor: 'pointer',
        zIndex: '100'   
    } 

    return (
        <div>
            <div>

            </div>
            <ul style={styles}>
                <li>{props.language === 'ENGLISH' ?  'Home' : 'Inicio'}</li>
                <li>{props.language === 'ENGLISH' ?  'About Me' : 'Sobre mi'}</li>
                <li>{props.language === 'ENGLISH' ?  'Projects' : 'Proyectos'}</li>
                <li>{props.language === 'ENGLISH' ?  'Contact Me' : 'Contáctame'}</li>
            </ul>
        </div>
    )
  
}

export default NavBar;