import img1 from '../images/IMG_1097.jpg'; 
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact,faBootstrap,  faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDatabase, faServer, faCodeBranch,faMicrochip} from '@fortawesome/free-solid-svg-icons';

export default function Welcome() {

    return (
      <div className="body" id="About">
        <h1>Who am I...</h1>
        <div className="flex align">
          <img src={img1} class="me" alt="Avatar" ></img>
          <div className="aboutText" >
            <h3>Mechanical Engineering wasn't for me… Thankfully Web Design is!</h3>
            <p>
              Hello! My name is Ximena. I am a Mexican Web Developer with a background in Engineering, Math, English, and Teaching all the latter.
              I decided to make a career switch in 2022 after working as a Design Engineer for a year. It was then that I realized coding allowed me 
              to solve more interesting problems and provided an opportunity to explore my creative side and express myself through front-end development.<br/>
              <br/>
              I have worked hard to become a reliable, proactive leader that pays attention to detail and cares about people. 
              I am passionate and hungry for knowledge. In love with the arts and nature. Concerned about the state of our world, always seeking ways to make it better.
              <br/> Currently obsessed with audiobooks, concerts and trying new things. 
              I am seeking opportunities to develop my full potential, unleash my creativity, learn from professionals, and be a part of interesting and challenging projects that I can proudly show off to everyone.
            </p>
          </div>
        </div>

        <a  target="_blank" rel="noreferrer" href='https://docs.google.com/document/d/13dxqJOKNmBHbF5E-A77OChpCDPY9XB6bMsyJvzLNpFc/edit?usp=sharing' >
          <h3 style={{textAlign: "center"}} >View My Resume</h3>
        </a>

        <div className='flex align' id="skills" >
          {/* HTML */}
          <FontAwesomeIcon icon={faHtml5} size="4x" /> 
          {/* CSS */}
          <FontAwesomeIcon icon={faCss3Alt} size="4x"/> 
          {/* JS */}
          <FontAwesomeIcon icon={faJs} size="4x" /> 
          {/* React */}
          <FontAwesomeIcon icon={faReact} size="4x" /> 
          {/* Node */}
          <FontAwesomeIcon icon={faNodeJs} size="4x" /> 
          {/* SQL */}
          <FontAwesomeIcon icon={faDatabase} size="4x"/> 
          {/* Generic Code */}
          <FontAwesomeIcon icon={faCode} size="4x"/> 
          {/* Express */}
          <FontAwesomeIcon icon={faServer} size="4x" /> 
          {/* Bootstrap */}
          <FontAwesomeIcon icon={faBootstrap} size="4x" /> 
          {/* MVC */}
          <FontAwesomeIcon icon={faCodeBranch} size="4x" /> 
          {/* C++ */}
          {/* <FontAwesomeIcon icon={faCPlusPlus} size="4x" />  */}
          {/* Arduino */}
          <FontAwesomeIcon icon={faMicrochip} size="4x" /> 
        </div>

        
      </div>
      

    );
  }