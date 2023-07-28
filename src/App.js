import React, { useState } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import FileA from './components/fileA';
import FileB from './components/fileB';
import FileC from './components/fileC';
import FileD from './components/fileD';
import { faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [current, setCurrent] = useState('About me ');

  function handleIcon(active){
    console.log(active);
    document.getElementById(active).setAttribute("src",logo)
    document.getElementById(active).setAttribute("class","App-logo") 
    const opts = ["imgabt", "imgwrk", "imgctt", "imgcv"];
    const elements = opts.filter(item => item !== active);
    elements.forEach(element => {
    const elem = document.getElementById(element);
    elem.removeAttribute("src");
    elem.removeAttribute("class");
    });
  }

  const currentPage = () => {    
    if (current === "About me"){  
      handleIcon("imgabt")
      return <FileA />
    } else if (current === "My Work") {
      handleIcon("imgwrk") 
      return <FileB />
    } else if (current === "Contact"){
      handleIcon("imgctt") 
      return <FileC />
    } else if (current === "Resume") {
      handleIcon("imgcv")
      return <FileD />
    } else {
      return <h2 style={{textAlign:"center"}} >Welcome!</h2>
    }
  }

  const Change = (page) => {
    setCurrent(page)
    console.log(current)};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ximena Cu</h1>
        <div className="flex">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Web Developer</h2>
        </div>
        <ul className="flex" id="Navbar" >
          <div className="NavbarIcon" id="About">
            <img id="imgabt"/>
            <a className="linkk" href="#About" onClick={() => Change('About me')}>About me</a>
          </div>
          
          <div className="NavbarIcon" id="MyWork" >
            <img id="imgwrk"/>
            <a className="linkk" href="#MyWork" onClick={() => Change('My Work')}>My Work</a>
          </div>

          <div className="NavbarIcon" id="Contact" >
            <img id="imgctt"/>
            <a className="linkk" href="#Contact" onClick={() => Change('Contact')}>Contact</a>
          </div>

          <div className="NavbarIcon" id="Resume" >
            <img id="imgcv"/>
            <a className="linkk" href="#Resume" onClick={() => Change('Resume')}>Resume</a>
          </div>
        </ul>
      </header>


        {currentPage()}


      <footer className='flex align' style={{justifyContent:"space-evenly"}}>
        {/* <div className='flex align' >  */}
          <p>Visit me at: </p>
          <a class="linkk" style={{margin: "3%"}} href='https://github.com/Ximenacu' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" style={{marginRight: "1%"}}/>
            XimenaCu
          </a> 
          <a class="linkk" style={{margin: "3%", whiteSpace: "nowrap"}} href='https://www.linkedin.com/in/ximenacu/' target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{marginRight: "1%"}} />
            Ximena Fernández del Castillo Cu</a>
          <a class="linkk" style={{margin: "3%"}} href='https://twitter.com/cu1234567891011' target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faTwitter} size="lg" style={{marginRight: "1%"}}/>
            @cu12345
          </a>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default App;
