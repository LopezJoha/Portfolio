import React from 'react'

function NavBar(props) {

    if (props.language === 'ENGLISH'){
        return (
            <ul style={{display: 'flex', alignItems: 'center', justifyContent:'center', listStyle:'none'}}>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
            </ul>
        )
    } else {
        return(
            <ul style={{display: 'flex', alignItems: 'center', justifyContent:'center', listStyle:'none'}}>
                <li>Inicio</li>
                <li>Acerca de mí</li>
                <li>Proyectos</li>
            </ul>
        )
    }
}

export default NavBar;