import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Loading from "../components/loading";
import ContactForm from "../components/contactform";
import ErrorPage from "./ErrorPage";
import OtherWork from "../components/otherwork";
import { REST_PATH } from "../globals/globals";

const SinglePage = () => {

    const { slug } = useParams()

    const restPath = `${REST_PATH}ahdesigns-work?acf_format=standard&slug=${ slug }&_embed`
    const [restData, setData] = useState([])    
    const [isLoaded, setLoadStatus] = useState(false)
    const [toolsData, setToolsData] = useState([])

    //get API data for work post
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }

        fetchData()
    }, [restPath])

    // check each work tool and find the matching image
    useEffect(() => {
        const fetchToolsData = async () => {
            const response = await fetch('https://wastedsundays.com/adamhdesign/wp-json/wp/v2/ahdesigns-tools?acf_format=standard&per_page=100')
            if (response.ok) {
                const data = await response.json()
                setToolsData(data)
            }
        }

        fetchToolsData()
    }, [])

    const getToolImage = (toolTitle) => {
        const tool = toolsData.find(tool => tool.title.rendered === toolTitle)
        return tool ? tool.acf.tool_image : null
    }


    return (
        <>
    <div>
        {isLoaded ? (
            restData.length > 0 ? ( // Check if restData is not empty
                <div>
                    {restData[0].featured_images['2048x2048'] && (
                        <img srcSet={restData[0].featured_images['2048x2048'].srcset}/>
                    )}

                    <h1>{restData[0].title.rendered}</h1>

                    {restData[0].acf.project_description && (
                        <p>{restData[0].acf.project_description}</p>
                    )}
                    
                    
                    <div dangerouslySetInnerHTML={{__html:restData[0].content.rendered }}></div>
                    

                    {restData[0].acf.work_tools && restData[0].acf.work_tools.length > 0 && (
                        <div>
                            <h3 style={{color: restData[0].acf.project_primary_color}}>Toolbox</h3>
                            {restData[0].acf.work_tools.map((tool, i) => (
                                <div key={i}>
                                    <div className={tool.post_title}>                                     
                                        <img src={getToolImage(tool.post_title)} alt={`${tool.post_title} icon card`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <Link to='../work'>
                        <button>
                            Back
                        </button>
                    </Link>

                    <OtherWork id={restData[0].id}/>
                    <h2>Get In Touch</h2>
                    <ContactForm />

                </div>
            ) : (
                <ErrorPage />
            )
        ) : (
            <Loading />
        )}

    </div>
</>



    )
}

export default SinglePage