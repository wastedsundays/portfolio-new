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
            <h2 className='fs-h2'>Contact</h2>
            <ContactForm />
        </div>

      )
}

export default WorkPage