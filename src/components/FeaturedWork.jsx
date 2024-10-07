import { useEffect, useState } from "react";
import { REST_PATH } from "../globals/globals";
import { Link } from "react-router-dom";

const FeaturedWork = () => {

    const featuredWorkPath = `${ REST_PATH }ahdesigns-work?acf_format=standard&featured-work=2`
    const [featuredData, setFeaturedData] = useState([]);
    const [isFeatLoaded, setFeatLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(featuredWorkPath);
                if (response.ok) {
                    const data = await response.json();
                    setFeaturedData(data);
                    setFeatLoaded(true);
                } else {
                    setFeatLoaded(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setFeatLoaded(false);
            }
        };

        fetchData();
    }, [featuredWorkPath]);

        //Helper - shuffle
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
    
        //Helper - Adjust the data
        const adjustData = (data) => {
            // Run the shuffle helper
            const shuffledData = shuffleArray([...data]);
            // Limit to a maximum of 5 items
            const limitedData = shuffledData.slice(0, 5);
            // check if it's odd
            if (limitedData.length % 2 !== 0) return limitedData;
            // If it's even, drop the last one to make it odd
            return limitedData.slice(0, -1);
        };

        // Adjust the featuredData to ensure it has an odd number of projects and no more than 5
        const adjustedData = adjustData(featuredData);


    return (
        <>

            {isFeatLoaded ? (
                <div className="featured-project">
                    <div className="small-project"><h2 className="fs-h2">Work</h2></div>
                    {adjustedData.map((project, i) => (
                        <div className="large-project" key={i}>
                            <div className="project-card card-shadow">
                                {project.featured_images['medium'] && (
                                    <img srcSet={project.featured_images['medium'].srcset}/>
                                )}
                                <h3>{project.title.rendered}</h3>
                                <Link to={`/work/${project.slug}`}> 
                                <button>Details</button>
                            
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="small-project">
                        <Link to={`/work`}>
                        <button>More Work</button>
                        </Link>
                    </div>

                </div>
            
                ) 
            : 
                (
                <p>Loading</p>
                
                )}

        </>
    )
}

export default FeaturedWork;