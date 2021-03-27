import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faFire, faHeart } from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss';

const Sidebar = () => {
    return (
        <nav className="sidebar-nav">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active" exact>
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span className=''>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/trending" activeClassName="active">
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faFire} />
                        </span>
                        <span className=''>Most Popular</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/liked-videos" activeClassName="active">
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className=''>Liked Videos</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/link-4" activeClassName="active">
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faCoffee} />
                        </span>
                        <span className=''>Link 4</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/link-5" activeClassName="active">
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faCoffee} />
                        </span>
                        <span className=''>Link 5</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/link-6" activeClassName="active">
                        <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faCoffee} />
                        </span>
                        <span className=''>Link 6</span>
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default Sidebar;