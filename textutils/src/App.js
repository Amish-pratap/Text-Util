
import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');  //wheather dark mode is enable or not
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" about='About TextUtils' />
      <div className='container my-3'>
        <TextForm heading='Enter the text to analyze below' />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
