import Loading from "../components/loading";
import Toolbox from "../components/toolbox";
import ContactForm from "../components/contactform";
import { useState, useEffect } from 'react';
import { REST_PATH } from "../globals/globals";



const AboutPage = () => {

    const aboutRestPath = `${ REST_PATH }pages/104`

    const [restAboutData, setAboutData] = useState ([])
    const [aboutLoaded, setAboutLoaded] = useState (false)

    useEffect(() => {
        const fetchAbout = async () => {
            const response = await fetch(aboutRestPath)
            if (response.ok) {
                const about = await response.json()
                setAboutData(about)
                setAboutLoaded(true)
            } else {
                setAboutLoaded(false)
            }
        }
        fetchAbout()
    }, [aboutRestPath])

    return (
        <div className='about-page'>
            <section>
                <h1>Hello From the About Page</h1>
            </section>
            <section>
                <div>
                { aboutLoaded ? (
                        <div>
                        <h2>{restAboutData.title.rendered}</h2>
                    
                        <div dangerouslySetInnerHTML={{__html:restAboutData.content.rendered }}></div>
                        </div>
                        ) : ( <Loading /> ) }
                </div>
            </section>
            <section>
                <div>
                    <h2>What I Work With</h2>
                    <p>Heres what I use to get things done</p>
                </div>

                <div>
                    <Toolbox />
                </div>
            </section>
            <section>
                <div>
                    <h2>{`What I've Learned`}</h2>
                    <p>ACF repeater field</p>
                </div>
            </section>
            <section>
                    <ContactForm />
            </section>


        </div>
    )
}
export default AboutPage
