// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Textarea1 from './components/Textarea1';
import React, { useState } from 'react';
import Alert from './components/Alert';

// let name2= "Merwin Rebello";
function App() {
   const [mode, setmode] = useState('light');
   const [alert,setalert]= useState (null);

   const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
   }

   const togglemode=()=>{
    if(mode ==='light'){
     setmode('dark');
     document.body.style.backgroundColor= 'grey';
      showalert(" nigga mode is enabled","success")
   }
    else{
    setmode('light');
    document.body.style.backgroundColor= 'white';
    showalert("light mode is enabled","success")
   }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with MERWINREBELLO
    //     </a>
    //   </header>
    // </div>

//    <>
//    <div className="best">
//       <h1> this is the beginning of me learning React</h1>
//     </div>
//     <h2> hello {name2}</h2>
//      {/* what  ever comes in curley brackets is treated as javascript. */}
//     <nav className="nav-bar">
//       <li>home</li>
//       <li>about</li>
//       <li>contacts</li>
//       <li>itsheckyeah me</li>
//     </nav>
//     <div className='container'>
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam minus aut dolore eaque accusantium, dignissimos necessitatibus id repellendus cum tempore enim consequatur incidunt neque!
//     </div>
// </>
<>
   <NavBar title='Merwin Rebello'about='ABOUT US' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    {/* <NavBar/> this will take the default value set  */}
    <div className='container my-3'>
      <Textarea1 showalert={showalert} heading='Enter the text to analyze'/>
    </div>
  
</>  
    ); 
}

export default App;
