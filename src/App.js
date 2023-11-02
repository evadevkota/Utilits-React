
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alerts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    

  }
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#212529'
      document.body.style.color='white'
      showAlert("Dark Mode has been enabled","success")
      setInterval(() => {
        document.title="Text Utils-Dark Mode"
      }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      document.body.style.color='black'

      showAlert("Light Mode has been enabled","success")
      setInterval(() => {
        document.title="Text Utils-Light Mode"
      }, 1500);
    }
  }
  return (
    
    
    <>
     
     <Router>
     <Navbar title="Text Utils" about="About Utils" mode={mode} toggleMode={toggleMode}/>
     < Alert alert={alert}/>

     <div className="container my-3"> 
       
        <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/home" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </Router>
     





   </>
  );
}

export default App;
