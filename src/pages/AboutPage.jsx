


const AboutPage = () => {

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
                    {/* {apiData ? (
                        // Render Tools with API data as prop
                        <Tools data={apiData} />
                        ) : (
                        <p>Loading...</p>
                    )} */}
                </div>
            </section>
            <section>
                <div>
                    <h2>{`What I've Learned`}</h2>
                    <p>ACF repeater field</p>
                </div>
            </section>



        </div>
    )

}

export default AboutPage