
import './App.css';
import React from 'react';
import image from './img/collegestudents.png';
import {useNavigate} from 'react-router-dom';
//import Calculate from './Calculate';


//import ReacrDOM from 'react-dom';
//import Button from '@mui/material/Button'; 

function App() {

 const navigate = useNavigate()
  function goToCal(){
    navigate(Cal);
  }


  
  return (
   
       <div style = {{
        
        //backgroundPosition: 'center',
  //backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height:'1080px',
  width:'1200px',
        
       // backgroundsize : ConvolverNode,
        backgroundImage : `url(${image})`

       }}>
        
       <h1 className='App'>Welcome Engineering</h1>

       <div className='App'>
       <button onClick={goToCal} 
       className='shadow__btn' 
       >
        Click here to calculate 75 percent
        </button>
       </div>

       </div>
    
   
  );
}

export default App;
