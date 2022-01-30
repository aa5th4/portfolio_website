import React from 'react';
import mail from './mailz.jpeg';
import emailjs from 'emailjs-com';
import './Contact.css' ;

function Contact() {
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_skw45ud','template_l0axpvo',e.target,'user_LVsOjm4LE2rUkaJ77mIQb')
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

  return (
    <div className='contact_me reveal' id='contact'>
        <div className='rheading'>
            <h2>Contact me</h2>
            <h4>Lets keep in touch</h4>
        </div>
        <hr className='hr2' />
        <div className='page'>
            <div className='getin'>
                <h2>Get In Touch</h2>
                <div className="tags">
                    <a href="https://www.w3schools.com" className='fa fa-facebook'></a>
                    <a href="#" className='fa fa-instagram'></a>
                    <a href="https://www.linkedin.com/in/ashwan1-s1ngh/" className='fa fa-linkedin'></a>
                    <a href="#"className='fa fa-goggle'></a>
                    <a href="#" className='fa fa-github'></a>
                </div>
                <span>Send Your Email Here!</span>
                <img src={mail} alt="mail" />
            </div>
            <div className='mailform'>
               <form onSubmit={sendEmail}>
                        <label>name</label>
                        <input className='inputbtn' type="text" name='name' />
                        <label>Email</label>
                        <input className='inputbtn' type="email" name='user_email' />
                        <label>Meassge</label>
                        <textarea className='textbtn' name="message" rows="4"></textarea>
                        <input className='sendbtn'  type="submit" value='Send' />
               </form>
            </div>
            <br />
            <br />
            <br />
        </div>

    </div>
    
);
}

export default Contact;
