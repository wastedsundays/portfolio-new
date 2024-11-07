import { useContext, useState } from 'react';
import EmailContext from './emailcontext';
import { useLocation } from 'react-router-dom';


const ContactForm = () => {
    const contactLocation = useLocation();
    const { emailSent, setEmailSent } = useContext(EmailContext);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
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
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

                    // Debug response details
                const responseText = await response.text();
                console.log('Response Text:', responseText);
            
            if (response.ok) {
                // Update state to indicate email has been sent
                setEmailSent(true);
            } else {
                alert('Message Not Sent.');
                // throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Error sending Message.');
        }

    }

    return (
        <div className='contact-form'>
            {emailSent ? (
                <p>Thanks for your message! I will be in touch shortly.</p>
            ) : (
                <>
                <div>
                    {contactLocation.pathname === '/contact' ? (
                        <h1 className='fs-hv2'>Contact</h1>
                        ) : (
                        <h2 className='fs-h2'>Contact</h2>
                    )}
                    <p>I&apos;d love to hear from you! Whether you have a question about what I do (or about your current website), a collaboration opportunity,  or you just want to say hi, feel free to reach out.</p>
                </div>
                <form className='depth-4' onSubmit={sendEmail}>
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
                </>
            )}
        </div>
    );
}

export default ContactForm;
