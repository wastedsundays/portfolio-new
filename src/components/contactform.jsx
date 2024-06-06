import { useContext } from 'react';
import EmailContext from './emailcontext';


const ContactForm = () => {
    const { emailSent, setEmailSent } = useContext(EmailContext);

    const sendEmail = (event) => {
        event.preventDefault();
        console.log('email sent!');
        // Update the state to indicate that email has been sent
        setEmailSent(true);
    }

    return (
        <div className='contact-form'>
            {emailSent ? (
                <p>Thanks for your message! I will be in touch. If you have a second message you need to send, refresh the page.</p>
            ) : (
                <form onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            )}
        </div>
    );
}

export default ContactForm;
