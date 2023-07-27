import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import FileA from './components/fileA';
import FileB from './components/fileB';


function App() {
  const [current, setCurrent] = useState('About me ');

  function handleIcon(active){
    console.log(active);
    document.getElementById(active).setAttribute("src",logo)
    document.getElementById(active).setAttribute("class","App-logo") 
    const opts = ["imgabt", "imgwrk", "imgctt"];
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
      return <div className="work" id="Contact" >
      <h1>Contact</h1>
    </div>
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
          <div className="NavbarIcon">
            <img id="imgabt"/>
            <a href="#Navbar" onClick={() => Change('About me')}>About me</a>
          </div>
          
          <div className="NavbarIcon">
            <img id="imgwrk"/>
            <a href="#Navbar" onClick={() => Change('My Work')}>My Work</a>
          </div>

          <div className="NavbarIcon" >
            <img id="imgctt"/>
            <a href="#Navbar" onClick={() => Change('Contact')}>Contact</a>
          </div>
        </ul>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>


        {currentPage()}


      <footer>
        <p>By Ximena</p>
      </footer>
    </div>
  );
}

export default App;
