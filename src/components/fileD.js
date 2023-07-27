import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact,faBootstrap,  faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDatabase, faServer, faCodeBranch,faMicrochip} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Welcome() {

    return (
        <div className="body" id="About">
            <h1>Resume</h1>
            <div className="flex align">
                {/* <img src={img1} class="me"></img> */}
                <div className="aboutText" >
                    <h3 style={{textAlign: "center"}} >Summary</h3>
                    <p>
                    Full Stack Web Developer with experience as a Design Engineer and Teaching. 
                    Creative, hardworking, problem solver, interested in graphic design, sustainability and effective communication. 
                    Dedicated to creating visually appealing, intuitive user interfaces and building robust, optimized backend systems. 
                    </p>
                </div>
            </div>

            <div style={{marginBottom: "6%"}} >
                <h3 style={{textAlign: "center"}}>Skills</h3>
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

            <button className={`btn btn-secondary btn-lg"`} >Resume Download</button>

            {/* <a  target="_blank" href='https://docs.google.com/document/d/13dxqJOKNmBHbF5E-A77OChpCDPY9XB6bMsyJvzLNpFc/edit?usp=sharing' >
            <h3 style={{textAlign: "center"}} >View My Resume</h3>
            </a> */}

        </div>
      

    );
  }