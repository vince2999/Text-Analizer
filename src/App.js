
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
       <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <div className="container my-3">
           <TextForm heading ="Enter the text to analyze"/>
       </div>

       
       <div className="container">
           
       <h3>TextUtils App</h3>
       <div className="material">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, fugit quam corporis cum, deleniti beatae excepturi at perferendis amet natus neque? Voluptas minus esse quas modi officiis repellat? Error, vero!</p>
      </div>

       </div>

       <About/>
      

      {/* <div classNameName="pic">
        <img src="logo.svg" alt="App Logo Image"/>

      </div> */}

      
      
    </>
    
  );
}

export default App;
