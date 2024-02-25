import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './emailinfo.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kc9nhms', 'template_6c1xt82', form.current, {
        publicKey: 'jlQXsUZWzstUUd12h',
      })
      .then(
        () => {
          toast.success('your email has been sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    e.target.reset();
  };

  return (
    <div className='email'>
    <form className='emailform' ref={form} onSubmit={sendEmail}>
        <div className='emailform-header'>
            <div className='emailform-header-name'>
                <input type="text" name="user_name" placeholder='Votre nom'/>
            </div>
            <div className='emailform-header-email'>
                <input type="email" name="user_email" placeholder='Votre courriel' />
            </div>
        </div>
        <div className='emailform-message'>
            <textarea name="message" placeholder='Message'/>
        </div>
        <div className='emailform-send'>
            <input type="submit" value="Send" />
        </div>
    </form>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </div>
  );
};

export default EmailInfo;