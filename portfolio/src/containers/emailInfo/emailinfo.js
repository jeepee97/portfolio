import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './emailinfo.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailInfo = () => {
  const form = useRef();

  const test = () => {
    toast("test!!!");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kc9nhms', 'template_6c1xt82', form.current, {
        publicKey: 'jlQXsUZWzstUUd12h',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    e.target.reset();
  };

  return (
    <div>
    <form className='emailform' ref={form} onSubmit={test}>
        <div className='emailform-header'>
            <div className='emailform-header-name'>
                <input type="text" name="user_name" placeholder='Name'/>
            </div>
            <div className='emailform-header-email'>
                <input type="email" name="user_email" placeholder='Email' />
            </div>
        </div>
        <div className='emailform-message'>
            <textarea name="message" placeholder='Message'/>
        </div>
        <div className='emailform-send'>
            <input type="submit" value="Send" />
        </div>
    </form>
<ToastContainer/>
    </div>
  );
};

export default EmailInfo;