import Tools from "../components/tools"
import Loading from "../components/loading";
import ContactForm from "../components/contactform";
import { useState, useEffect } from 'react';
import { REST_PATH } from "../globals/globals";



const AboutPage = () => {
    const [apiData, setApiData] = useState(null);
    useEffect (() => {
        //Fetch API Data
        fetch(`${ REST_PATH }ahdesigns-tools?acf_format=standard&filter[orderby]=slug&order=asc&per_page=100`)
            .then(response => response.json())
            .then(data => {
                //Set API Data in State
                setApiData(data);
            })
            .catch(error => {
                console.error('Error fetching data;', error);
            });
        }, [])
    return (
        <div className=''>
            <section>
                <h1>Hello From the About Page</h1>
                <p>This page will be the about me bio, the skills section, and the education section</p>
            </section>
            <section>
                <div>
                    <h2>Bio</h2>
                    <p>Some words about me</p>
                </div>
            </section>
            <section>
                <div>
                    <h2>What I Work With</h2>
                    <p>Heres what I use to get things done</p>
                </div>
                <div>
                    {apiData ? (
                        // Render Tools with API data as prop
                        <Tools data={apiData} />
                        ) : (
                        <Loading />
                    )}
                </div>
            </section>
            <section>
                <div>
                    <h2>{`What I've Learned`}</h2>
                    <p>ACF repeater field</p>
                </div>
            </section>
            <section>
                    <h2>Hello!</h2>
                    <ContactForm />
            </section>


        </div>
    )
}
export default AboutPage
