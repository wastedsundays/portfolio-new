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
            <h2>Contact</h2>
            {emailSent ? (
                <p>Thanks for your message! I will be in touch. If you have a second message you need to send, refresh the page.</p>
            ) : (
<form onSubmit={sendEmail}>
    <div>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" aria-required="true" />
    </div>
    <div>
        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" aria-required="true" />
    </div>
    <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" aria-required="true"></textarea>
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
