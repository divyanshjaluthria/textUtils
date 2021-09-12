
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert'




function App() {
  const [mode, setMode] = useState('light')

  // const [text, setText] = useState('')

  const toggleMode = () =>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121517';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
    
    // const text = ()=>{
      // if (mode==='light') {
        // setText('Dark🔆')
        // 
      // } else {
        // 
        // setText('Dark🌙')
      // }
    // }

  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

      <TextForm heading="Enter The Text To Analyze" mode={mode}/>
      {/* <About/> */}
      <Alert/>
      </div>
    </>

  );
}

export default App;
