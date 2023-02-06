import { useState } from 'react';
import '../styles/contact.css'


const Contact = () => {
    const [ifEmpty, setEmpty] = useState(false);
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        subject: '',
    });

    function onSubmitHandler(e) {
        e.preventDefault();
        if (
            inputData.name !== '' &&
            inputData.email !== '' &&
            inputData.subject !== ''
        ) {
            setEmpty(true);
        } else {
         
            setEmpty(false);
        }
        setTimeout(() => {
          setInputData({name: '',
          email: '',
          subject: ''},)
          setEmpty(false);
        }, 3000);
    }
    function inputChange(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
    return (
        <div className='contact-page'>
            <div className="contact-details">
                <h2>Get in touch</h2>
                <p>Phone: 030364286190</p>
                <p>
                    Email:
                    <a href="mailto: info@dcidrinks.com" > info@dcidrinks.com</a>

                </p>
                <p>Address: Vulkanstraße 1, Berlin, DE 10367 </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9710.141733077719!2d13.486212!3d52.523746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x700b4ec74a47a34d!2sDCI%20Digital%20Career%20Institute!5e0!3m2!1sen!2sde!4v1675668282898!5m2!1sen!2sde"></iframe>
            </div>
            <div className="contact-form transparent-bg">
                <form onSubmit={onSubmitHandler}>
                    <h2>Send us a message</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={inputChange}
                        type="text"
                        id="name"
                        value={inputData.name}
                        name="name"
                        placeholder="Your name.."
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={inputChange}
                        type="email"
                        id="email"
                        value={inputData.email}
                        name="email"
                        placeholder="Your email.."
                    />
                    <label htmlFor="subject">Subject</label>
                    <textarea
                        onChange={inputChange}
                        id="subject"
                        value={inputData.subject}
                        name="subject"
                        placeholder="Write something.."
                    />
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {ifEmpty ? (
                        <p>{inputData.name}Thanks for suscribing</p>
                    ) : null}
                </div>
            </div>
            
        </div>
    );
};
export default Contact;
