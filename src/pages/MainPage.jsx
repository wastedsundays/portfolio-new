// import { Link } from 'react-router-dom'
import ContactForm from '../components/contactform'
import OtherWork from '../components/otherwork'
import Adam from '../images/new-dissolve.png';

function MainPage() {
    return (
        <div>
            <section style={{display: 'grid', gridTemplateColumns: '40% 60%', alignItems: 'center'}}>
                <div>
                    <img style={{width: '100%'}} src={Adam}/>
                </div>
                <div>
                    <h1>Adam H</h1>
                    <p>Web Developer & Other Stuff</p>
                
                </div>

            </section>
            <section className='work-section'>
                <h2>Work</h2>
                <OtherWork />           
            </section>
            <section>
                <div>
                    <h2>Me</h2>
                    <p>Its not only building websites. Im a teacher, a coach, and bunch of other stuff.</p>
                </div>
                <div>

                </div>
            </section>
            <section>
                <div>
                    <ContactForm />
                </div>
            </section>
        </div>
    )

}

export default MainPage