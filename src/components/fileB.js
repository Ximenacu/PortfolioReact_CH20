import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import img2 from '../images/code3.jpg'; 
import img3 from '../images/micora4.jpg'; 
import img4 from '../images/roomie3.jpg';
import img5 from '../images/moody4.jpg';
import img6 from '../images/code5.jpg';
import '../App.css';

export default function Welcome() {
    const [isHovered, setIsHovered] = useState(null);
    const handleMouseEnter = (project) => {
        setIsHovered(project);
    };
      const handleMouseLeave = () => {
        setIsHovered(null);
    };

    // empieza
    function leWork(side, imgTop, project, imgBtm){
        const objPointer = info[project];
        if (!objPointer) return null;

        const Aa = (                
            <div className="lilbox" >
                <h2>{objPointer.title}</h2>
                {isHovered === project && (

                    <div>
                        <p>{objPointer.descr}</p>
                        <b> <li className='flex' >  
                            <ul>HTML</ul>
                            <ul>CSS</ul>
                            <ul>JS</ul>
                            <ul>React</ul>
                            <ul>SQL</ul>
                        </li></b>
                </div>
                )}
            </div>
        )

        const Bb = (
            <a className="linkk" href={objPointer.linkDeployed} target="_blank" rel="noreferrer" >
            <div className='image-container' >
                <img src={imgTop} class="imgtop"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}>
                </img>
                        
                <img src={imgBtm} class="imgbtm"></img>
                <a className="linkk" style={{textAlign: "center", margin: "3% 0%"}} href={objPointer.linkGitH} target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{marginRight: "3%"}}/>
                    View Repository
                </a>
                        
            </div>
            </a>
        )

        if(side === "non"){
            return (
                <div className="leWork">
                {Bb}
                {Aa}</div>
            )
        } else {
            return (
                <div className="leWork">
                {Aa}    
                {Bb}
                </div>
            )
        }    
    }
    // termina 

    return (
        <div className="body" id="MyWork">
            <h1 style={{color:"white"}} >My work</h1>
            <p style={{color:"white"}}>Some of my work. Enjoy</p>
            <div className="box" >
                {/* ---------- 1 */}
                {leWork('non', img3, 'project1', img6)}

                {/* ---------- 2 */}
                {leWork('par', img2, 'project2', img6)}

                {/* ---------- 3 */}
                {leWork('non', img4, 'project3', img6)}

                {/* ---------- 4 */}
                {leWork('par', img2, 'project4', img6)}

                {/* ---------- 5 */}
                {leWork('non', img5, 'project5', img6)}

                {/* ---------- 6 */}
                {leWork('par', img6, 'project6', img6)}
            </div>
        </div>
    );
  }

const info = {
    project1 : {
        title: "Mi Corazón",
        descr : "Official site for coffee shop and gourmet bakery in the heart of Mérida.",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit",
        linkGitH: "https://github.com/Ximenacu/MiCorazon"
    },
    project2 : {
        title: "Final Project",
        descr : "Final Project of the bootcamp",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit",
        linkGitH: "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit"
    },
    project3 : {
        title: "Roomie Hunt",
        descr : "Like Airbnb but better",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://arcane-tundra-44281-d362c28aef30.herokuapp.com/",
        linkGitH: "https://github.com/Enrique-V06/roomiefinder"
    },
    project4 : {
        title: "The Important stuff",
        descr : "Would you like to get to know yourself better? Visit this website!",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit",
        linkGitH: "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit"
    },
    project5 : {
        title: "Moodify",
        descr : "Super cool app to find playlists and moodboards",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://alextrejo92.github.io/Project-Moodify/",
        linkGitH: "https://github.com/AlexTrejo92/Project-Moodify"
    },
    project6 : {
        title: "Another Cool app that totally exists...",
        descr : "",
        tech : ["html", "CSS", "JS", "React", ],
        linkDeployed : "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        linkGitH: "https://docs.google.com/document/d/1aOB8_Y081--ZI7wkBNObKgJrrNHsY9Tk8gBvNwQyGv8/edit"
    },
    
}






