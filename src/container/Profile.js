import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import profilephoto from './profilephoto.jpeg';

function Profile() {
  return (

        <>
        <header className='hdr'>
               <a href='#'><span>Home</span></a>
               <a href='#about'><span>About Me</span></a>
               <a href='#resume'><span>Resume</span></a>
               <a href='#'><span>Testimonial</span></a>
               <a href='#contact'><span>Contact Me</span></a>
        </header>
        <div className='container'>
            <div className='details'>
                <div className="tags">
                    <a href="#" className='fa fa-facebook'></a>
                    <a href="#" className='fa fa-instagram'></a>
                    <a href="#"className='fa fa-linkedin'></a>
                    <a href="#"className='fa fa-goggle'></a>
                    <a href="#" className='fa fa-github'></a>
                </div>
                <div className='name'>
                    <span>Hello,I'M Ashwani</span>
                </div>
                <div className='jobs-typical'>
                    <h1>
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Hard Working",
                            1000,
                            "Quick Learner",
                            1000,
                            "Ethusiastic Dev",
                            1000,
                            "Security Specialist",
                            1000,
                        ]}
                        />
                    </h1>
                </div>
                <div className='work'>
                    <span className='infot'>Information Technology Security Specialist</span>
                </div>
                <div className='btn'>
                    <a href="#contact"><button className='btnss'>Hire Me</button></a>
                    <a href="resume.pdf" download='Ashwani(IIT JAMMU) resume.pdf'>
                    <button className='btnss'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='photo'>
                  <div>
                      <img src={profilephoto} alt="profilephoto" />
                  </div>
            </div>
        </div>
        </>
  );
}

export default Profile;
