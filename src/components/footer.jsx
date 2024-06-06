

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
                        linkedin
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        mail
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer