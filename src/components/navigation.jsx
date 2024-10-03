import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from './footer';
import ThemeToggle from './ThemeToggle';


const Navigation = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);

    const [menuStatus, setMenuStatus] = useState("closed")
    const toggleMenu = () => {
        setMenuStatus(menuStatus === "closed" ? "open" : "closed");
    }

    const closeMenu = () => {
        setMenuStatus("closed");
    }

    useEffect(() => {
        // Determine the active tab index based on the current location pathname
        switch (true) {
            case location.pathname === '/':
                setActiveTab(0);
                break;
            case location.pathname.startsWith('/work'):
                setActiveTab(1);
                break;
            case location.pathname === '/about':
                setActiveTab(2);
                break;
            case location.pathname === '/contact':
                setActiveTab(3);
                break;
            default:
                setActiveTab(null); // Set to null if no match
                break;
        }
    }, [location]);

    return (
        <>
            <header>
                <div>
                    <button className='hamburger-button' onClick={toggleMenu}>{menuStatus}</button>
                </div>

                <div>
                    <nav className={`${menuStatus}`}>
                        <ul>
                            <li className={activeTab === 0 ? 'active-tab' : ''}>
                                <Link to='/' onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className={activeTab === 1 ? 'active-tab' : ''}>
                                <Link to='/work' onClick={closeMenu}>
                                    Work
                                </Link>
                            </li>
                            <li className={activeTab === 2 ? 'active-tab' : ''}>
                                <Link to='/about' onClick={closeMenu}>
                                    About
                                </Link>
                            </li>
                            <li className={activeTab === 3 ? 'active-tab' : ''}>
                                <Link to='/contact' onClick={closeMenu}>
                                    Contact
                                </Link>
                            </li>
                            <ThemeToggle />
                        </ul>
                    </nav>
                </div>

            </header>
            <main>
                {/* Render the content based on the current route */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Navigation;