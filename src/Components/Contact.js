import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');

   console.log(data)

   /*  const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    } */

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_22nd6vm', ".contactForm", 'user_2sxnKNCMUj3xYP8gAsyWN')
        .then((result) => {
            console.log(result.text);

            
            
  
        }, (error) => {
            console.log(error.text);
            
        });
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setSuccess("Your message was sent, thank you!")
         
    }

    
    


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            {/* <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div> */}

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={sendEmail} id="contactForm" className="contactForm" name="contactForm">
					

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)} required/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                     <button type='submit' className="submit" value="send">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>

					
				   </form>

               <div id="message-warning">{error}</div>
				   <div id="message-success">
                  <i className="fas fa-check">{success}</i><br />
				   </div>
           
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
