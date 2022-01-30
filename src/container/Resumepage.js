import React, { useState } from 'react';
import './Resumepage.css';

function Resumepage() {

    const [toggleState, setToggleState]= useState(1);
    const toggletab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='resumep reveal' id='resume'>
        <div className='rheading'>
            <h2>Resume</h2>
            <h4>My formal Bio Details</h4>
        </div>
        <hr className='hr2' />
        <div className="maincontainer">
            <div className="sidebar">
                <div className="components">
                    <i className='fa fa-book'></i>
                    <i className='fa fa-book'></i>
                    <i className='fa fa-laptop'></i>
                    <i className='fa fa-book'></i>
                    <i className='fa fa-book'></i>

                
                </div>
                <div className='work'>
                    <button className={toggleState === 1? "workbtn-active" : "workbtn"}
                    onClick={()=> toggletab(1)} >Education</button>
                    <button className={toggleState === 2? "workbtn-active" : "workbtn"}
                    onClick={()=> toggletab(2)}>Work History</button>
                    <button className={toggleState === 3? "workbtn-active" : "workbtn"}
                    onClick={()=> toggletab(3)}>Skills</button>
                    <button className={toggleState === 4? "workbtn-active" : "workbtn"}
                    onClick={()=> toggletab(4)}>Projects</button>
                    <button className={toggleState === 5? "workbtn-active" : "workbtn"}
                    onClick={()=> toggletab(5)}>Interests</button>
                </div>
            </div>
            <div className="information">
               
                    <div className={toggleState === 1? "info-active ed" : "info"}>
                        
                        <div><h4>Btech in CSE (IIT JAMMU)</h4>
                            <li>7.02 CGPA</li></div>
                        <div><h4>12th standard</h4>
                            <li>7.9%</li></div>
                            <div><h4>10th standard (Vidya Anand Public School)</h4>
                            <li>9.6 CGPA</li></div>
                        
                    </div>
                    <div className={toggleState === 2? "info-active int" : "info"}>
                    
                        <div><h4>Cyber Security (VERZEO) (Sept 2019- Oct 2019)</h4>
                            <li>Learnt various concepts of Cyber Security (Cryptography, Dos and DDoS Attacks, Virtual Machines, Attack using Kali Linux</li></div>
                            <div><h4>Web Application Penetration Testing (Internshala) (Jan 2020- Feb 2020</h4>
                            <li>Tested an e-commerce website and made a Developer level report of all vulnerabilities found.</li></div>
   
                    </div>
                    <div className={toggleState === 3? "info-active sk" : "info"}>
                        <div><h4>Programming Languages:</h4>
                        <li>Python, C/C++, Java, SQL</li></div>
                        <div><h4>Platform:</h4>
                        <li>Windows, Linux, Ubuntu</li></div>
                        <div><h4>Tools and Technologies :</h4>
                        <li>Django Framework, Git, Virtual Machines, Selenium</li></div>
                        <div><h4>Technical subjects:</h4>
                        <li>Computer Networks, Algorithm, Data structures, Network and System Security, DBM</li></div>
                    </div>
                    <div className={toggleState === 4? "info-active pr" : "info "}>
                          <div><h4>COVID-19 HELP Web App</h4>
                            <li>Build a Web App using Django Framework with a colleague to help Covid-19 victims</li>
                            <li>Website was able to provide information about resources available in a particular city</li></div>
                            <div><h4>PHISHING DETECTOR TOOL </h4>
                            <li>Built a tool to detect if a website is phishing with 91% accuracy</li>
                            <li>Embedded the tool in a website for better GUI</li></div>
                            <div><h4>SIMILARITY FINDER TOOL</h4>
                            <li>Tool to find similar websites on Internet</li>
                            <li>Embedded in Website for better GUI</li></div>
                            <div><h4>VOICE ASSISTANT using Python</h4>
                            <li>Built a voice assistant using Python</li>
                            <li>Able to perform tasks like opening web pages, giving information from Wikipedia</li></div>
                            
                        
                    </div>
                    <div className={toggleState === 5? "info-active ho" : "info"}>
                        <div>
                        <h4>Hobbies:</h4>
                        <li>Badminton, Cricket, Football, Reading</li>
                        </div>
            
                       <div> 
                        <h4>ExtraCurricular Achievements: </h4>
                        <li>Winner of Inter Branch Football Tournament in Institute’s Annual Sports Fest.</li>
                        <li>Runner Up of Cricket Tournament in Institute’s Annual Sports Fest.</li>
                        <li>Successful Campus Ambassador Certified by VERZEO.</li>
                        </div>
                    </div>
                
            </div>
        </div>

    </div>
    );
}

export default Resumepage;
