import { Link } from "react-router-dom";

import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className='flex'>
            <div className='copy-info'>
                <p>&copy; {currentYear} Adam H.</p>
            </div>
            <div className='footer-icons'>
                <ul className='flex'>
                    <li>
                        <a href='https://www.linkedin.com/in/adamhauck1/'>
                        <LinkedinIcon />
                        
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/wastedsundays'>
                        <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <Link to={`/contact`}>
                        <TwitterIcon />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer