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
