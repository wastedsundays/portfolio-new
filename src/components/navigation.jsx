import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navigation = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);

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
            <div>
                <button>Menu</button>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className={activeTab === 0 ? 'active-tab' : ''}>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className={activeTab === 1 ? 'active-tab' : ''}>
                            <Link to='/work'>
                                Work
                            </Link>
                        </li>
                        <li className={activeTab === 2 ? 'active-tab' : ''}>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                        <li className={activeTab === 3 ? 'active-tab' : ''}>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {/* Render the content based on the current route */}
                <Outlet />
            </div>
        </>
    );
}

export default Navigation;