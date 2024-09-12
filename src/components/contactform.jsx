import { useContext, useState } from 'react';
import EmailContext from './emailcontext';


const ContactForm = () => {
    const { emailSent, setEmailSent } = useContext(EmailContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name+"changed");
    };

    const sendEmail = async (event) => {
        event.preventDefault();
        console.log("Form data being sent:", formData);
        // Send to php
        try {
            const response = await fetch('http://localhost/mail-endpoint.php', {
                method: 'POST',
                header: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Update state to indicate email has been sent
                setEmailSent(true);
            } else {
                alert('Message Not Sent.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending Message.');
        }

    }

    return (
        <div className='contact-form'>
            <h2>Contact</h2>
            {emailSent ? (
                <p>Thanks for your message! I will be in touch. If you have a second message you need to send, refresh the page.</p>
            ) : (
                <form onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="user_name">Name</label>
                        <input type="text" id="user_name" name="user_name" aria-required="true" required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="user_email">Email</label>
                        <input type="email" id="user_email" name="user_email" aria-required="true" required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" aria-required="true" required onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
