import React from 'react';
import './About.css';
import photo from './mainphoto.jpg';

function About() {
  return( 
      <>
        <div className='wrapup reveal' id='about'>
                <div className='headings'>
                    <h1>About Me</h1>
                    <h2>Why choose Me?</h2>
                </div>
                <hr className='hr1'/>
                <div className='About_me'>
                    <div className='photome'>
                    <img src={photo} />

                    </div>
                    <div className='detailsofme'>
                        <div className='hiredetails'>
                            <p>Recent cyber Security with broad knowledge 
                                in a variety of network security components Two years of work experience
                                in technicak support . Energetic self-starter,
                                problem-solver and team player with outstanding and communication skills. Fast learner with the ability to 
                                grasp new threats, concepts and thechnologies.</p>
                        </div>
                        <div className='hdetails'>
                            <h3>Here are a Few Highlights:</h3>
                            <ul className='liobj'>
                                <li>Programming Languages:Python, C/C++, Java, SQL</li>
                                <li>Platform: Windows, Linux, Ubuntu</li>
                                <li>Tools &amp; Technologies : Django Framework, Git, Virtual Machines, Selenium</li>
                                <li>Technical subjects: Computer Networks, Algorithm, Data structures, Network and System Security, DBMS</li>
                
                            </ul>
                        </div>
                        <div className='btnall'>
                            <a href="#contact"><button className='btn1'>Hire Me</button></a>
                            <a href="resume.pdf" download='Ashwani(IIT JAMMU) resume.pdf'><button className='btn1'>Get Resume</button></a>
                        </div>
                    </div>

                </div>
        </div>
    </>
  );
}

export default About;
