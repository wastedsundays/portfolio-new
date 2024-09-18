// import { Link } from 'react-router-dom'
import ContactForm from '../components/contactform'
import FeaturedWork from '../components/FeaturedWork';
import Adam from '../images/new-dissolve.png';

function MainPage() {
    return (
        <div className='home-page'>
            <section style={{display: 'grid', gridTemplateColumns: '40% 60%', alignItems: 'center', minHeight: '100vh'}}>
                <div>
                    <img style={{width: '100%'}} src={Adam}/>
                </div>
                <div>
                    <h1 className='fs-h1'>Adam H</h1>
                    <p>Web Developer & Other Stuff</p>
                
                </div>

            </section>
            <section className='work-section' style={{minHeight:'100vh'}}>
                <FeaturedWork />
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
                    <h2 className='fs-h2'>Contact</h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    )

}

export default MainPage