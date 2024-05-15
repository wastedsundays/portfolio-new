import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

const Navigation = () => {

    const [activeTab, setActiveTab] = useState(null)
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
    <>
        <div>
            <nav>
                <ul>
                    <li className={activeTab === 0 ? 'active-tab' : ''} onClick={() => handleTabClick(0)}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={activeTab === 1 ? 'active-tab' : ''} onClick={() => handleTabClick(1)}>
                        <Link to='/work'>
                            Work
                        </Link>
                    </li>
                    <li className={activeTab === 2 ? 'active-tab' : ''} onClick={() => handleTabClick(2)}>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className={activeTab === 3 ? 'active-tab' : ''} onClick={() => handleTabClick(3)}>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <Outlet />
        </div>
    </>
    )
}

export default Navigation;