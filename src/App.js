
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

  const [alert, setalert] = useState(null)

  const [mode, setMode]=useState('light')

  const showAlert = (message,type)=>{
    
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
       setalert(null)
    }, 3000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has enabled","success")
    }
  }
  return (
    <>
       <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>

       <Alert alert={alert}/>

       <div className="container my-3">
           <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
       </div>

       
       <div className="container">
           
       <h3>TextUtils App</h3>
       <div className="material">
        <p style={{color: mode==='dark'?'white':'black'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, fugit quam corporis cum, deleniti beatae excepturi at perferendis amet natus neque? Voluptas minus esse quas modi officiis repellat? Error, vero!</p>
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
