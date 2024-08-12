
import emailjs from '@emailjs/browser';
import {useRef} from "react";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bgv8u7l', 'template_8eh2vss', form.current, {
        publicKey: 'Y2exeBg2UofKpBYpK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('contact_sec').innerHTML = "<i>Your Email Was Sent!</i><br/><small>You will be contacted soon ...</small>";
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Message NOT Sent!");
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form">
      <div className="row gtr-uniform gtr-50">
			<div className="col-6 col-12-xsmall">
      <input type="text" id="name" name="user_name" placeholder="Name"/></div>
      <div className="col-6 col-12-xsmall">
      <input type="email" id="email" name="user_email" placeholder="Email"/></div>
      <div className="col-12">
      <textarea id="message" name="message" placeholder="Message" rows="4"/></div>
      </div>
      <p></p>
      <ul className="actions">
      <li><input type="submit" value="Send Message" /></li>
      </ul>
    </form>
  );
};
export default Contact