import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { REST_PATH } from "../globals/globals"

const OtherWork = ({ id }) => {

    const otherWorkRestPath = `${ REST_PATH }ahdesigns-work?acf_format=standard&featured-work=2`;
    const [otherData, setOtherData] = useState([]);    
    const [isOtherLoaded, setOtherLoadStatus] = useState(false);
    const [randomProjects, setRandomProjects] = useState([]);
    //get API data for work post
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(otherWorkRestPath);
                if (response.ok) {
                    const data = await response.json();
                    setOtherData(data);
                    setOtherLoadStatus(true);
                } else {
                    setOtherLoadStatus(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setOtherLoadStatus(false);
            }
        };

        fetchData();
    }, [otherWorkRestPath]);

    useEffect(() => {
        if (isOtherLoaded) {
            const otherProjects = otherData.filter(project => project.id !== id); // Filter out project with specified ID
            if (otherProjects.length <=3) {
                // 3 or fewer featured projects, display all of them
                setRandomProjects(otherProjects);
            } else {
                // more than 3, then we need to randomly select 3
                const randomProjects = [];
                const selectedIndices = [];
                // run a while loop to get to 3
                while (randomProjects.length < 3) {
                    const randomIndex = Math.floor(Math.random() * otherData.length);
                    if (!selectedIndices.includes(randomIndex) && otherProjects[randomIndex]) { // Check if the project is not undefined
                        selectedIndices.push(randomIndex);
                        randomProjects.push(otherProjects[randomIndex]);
                    }
                }
                setRandomProjects(randomProjects);
            }
        }
    }, [isOtherLoaded, otherData, id]);


    return (
        <>

            {isOtherLoaded && randomProjects.length > 0 ? (
                <div>
                    {/* <h2>Heres More From Me</h2>
                    // this should only appear on the projects page, not on the home page */}
                    <div className='projects-container'>
                    {randomProjects.map((project, i) => (
                        <div className={`project`} key={i}>
                        
                            <Link to={`/work/${project.slug}`}> 
                            {project.featured_images['medium'] && (
                            <img srcSet={project.featured_images['medium'].srcset}/>
                    )}
                            <h3>{project.title.rendered}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"/></svg>
                            </Link>
                        </div>
                    ))}
                    <Link to={`/work/`}><p>See More</p></Link>
                    </div>
                </div>
            ) :  isOtherLoaded && randomProjects.length === 0 ? (
                <p>There are no featured projects to display</p>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
};

OtherWork.propTypes = {
    id: PropTypes.number
}

export default OtherWork