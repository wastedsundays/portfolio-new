import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REST_PATH } from '../globals/globals';
import Loading from '../components/loading';
import ContactForm from '../components/contactform';

const WorkPage = () => {

    const worksRestPath = `${REST_PATH}ahdesigns-work?acf_format=standard`

    const [restData, setData] = useState([])    
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(worksRestPath)
        if ( response.ok ) {
          const data = await response.json()
          setData(data)
          setIsLoaded(true)
          } else {
            setIsLoaded(false)
            }
          }
          fetchData()
      }, [worksRestPath])

      return (

        <div className='work-page'>
            <h1 className='fs-hv2'>My Work</h1>
            <div>
                { isLoaded ?
                    <div>
                    {restData.map((projects, i) => 
                            <div className='project' key={i}>
                                <Link to={`/work/${projects.slug}`} >
                                {projects.featured_images['medium'] && (
                                    <img srcSet={projects.featured_images['medium'].srcset}/>
                                )}
                                <h3>{projects.title.rendered}</h3>
                                </Link>

                            </div>
                        )
                    }
                    </div>
                    :
                    <Loading />
                }
            </div>
            <section className='contact-section'>
                <ContactForm />
            </section>
        </div>

      )
}

export default WorkPage