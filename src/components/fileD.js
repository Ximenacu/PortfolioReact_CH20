import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact,faBootstrap,  faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDatabase, faServer, faCodeBranch,faMicrochip} from '@fortawesome/free-solid-svg-icons';



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

            <div style={{margin: "3% 0"}} >
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

            <a style={{margin:"4% 0% 0% 42%"}} className="btn btn-secondary btn-lg"
            // href="https://github.com/Ximenacu/PortfolioReact_CH20/blob/main/public/RESUME%20XC.pdf"
            href="https://raw.githubusercontent.com/Ximenacu/PortfolioReact_CH20/main/RESUME%20XC.pdf"
            download="XimenaCuResume.pdf">
            Resume Download
            </a>

        </div>
      

    );
  }