import React,{useEffect, useState , useRef} from "react";
import './Contact.scss';
import "aos/dist/aos.css";
import AOS from 'aos';
import emailjs from 'emailjs-com';
require('dotenv').config();

function Contact() {
const [values , setValues] = useState({
name:'',
email:'',
message:''
}); 

let submitBtn = useRef(null);
let successMsg = useRef(null);

const {name , email , message} = values;

  useEffect(()=>{
    AOS.init({
      offset:200
    });
  },[]);


const handleChange = (e) => {
const {name , value} = e.target;
setValues({...values , [name] : value});
}


  const sendEmail = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: 'Omkar Godham',
      to_name:name,
      to_email:email
  };   
 
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams , process.env.REACT_APP_USER_ID)
      .then((result) => {
         
          if(result.text == 'OK')
              {
                submitBtn.style.display='none';
                successMsg.style.display='block';

              }
      }, (error) => {
          console.log('error ' ,error.text);
      });
   
  }

const contactForm = () => {
  return <div className="contact4 overflow-hiddedn position-relative main" >
  <div className="row no-gutters about-section">
    <div className="container" data-aos = "zoom-in-up">
      <div className="contact-box mb-4 mb-md-0">
        <div className="actual-form">
          <h1 className="title font-weight-light text-white mt-2">Quick Contact Form</h1>
          <form className="mt-3" onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="text" placeholder="Your Name" name='name' value={name} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="email" placeholder="Your Email" name='email' value={email} onChange={handleChange}/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mt-2">
                  <textarea className="form-control text-white" rows="3" placeholder="Your Message..." name='message' value={message} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center mt-2">
                <span ref={el => successMsg = el} className='success-msg'>Your message reach to us successfully , our team will contact you ASAP.</span>
                <button type="submit" className="btn bg-white text-inverse px-3 py-2" ref={el => submitBtn = el} ><span> Submit</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="right-one-image" data-aos = "zoom-in-down">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199614953!2d73.72288117003453!3d18.524564859944654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622789419676!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
    </div>
  </div>
</div>
}

  return (
    <div className="contact" >
        {contactForm()}
    </div>
  );
}

export default Contact;
