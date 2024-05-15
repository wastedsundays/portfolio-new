
const ContactPage = () => {

    return (

        <>
            <div className=''>
                <h1>Hello From the Contact Page</h1>
                <form 
                // ref={form} onSubmit={sendEmail}
                >
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    )
}

export default ContactPage