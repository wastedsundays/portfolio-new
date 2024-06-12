import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer>
            <div>
                <p>&copy; {currentYear} Adam H.</p>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/adamhauck1/'>
                        <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/wastedsundays'>
                        <FaSquareGithub />
                        </a>
                    </li>
                    <li>
                        <Link to={`/contact`}>
                        <FaSquareEnvelope />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer