import React from 'react';
import Modal from 'react-modal'
import './Modal.css';
import Project from './Project';
import images from './images/images';


const customStyles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(255,255,255, 0.3)', 
    overflow: 'hidden'
  },

  content: { 
    padding: '4rem',  
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%', 
    background: 'whitesmoke', 

  } 
};

function ModalPopUp(props) {
    return (
      <div>
       <Modal
          isOpen={props.modalIsOpen}          
          onRequestClose={() => props.setIsOpen(false)}
          style={customStyles}
          contentLabel="Project"
        >          
        <button
            style={{
            zIndex: '2',
            position: 'absolute',
            top: '1rem', 
            right: '1rem', 
            border: 'none',
            background: 'transparent'             
          }}

          onClick={() => props.setIsOpen(false)}>
            <img src={images.close} 
              style={{cursor: 'pointer', 
              background: 'transparent', 
              color: 'oragered',
              height: '20px',
              alignSelf: 'flex-end', 
              width: '30px', 
              height: '30px'
              }}>                
            </img>
          </button>    

          <Project 
            name={props.selectedProject.name}
            img={props.selectedProject.img}
            link={props.selectedProject.link}
          />     
        </Modal>
      </div>
    );
  }

export default ModalPopUp; 