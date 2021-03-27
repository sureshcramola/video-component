import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, FormCheck } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import LoginSignupModal from "../../LoginSignupModal/LoginSignupModal";
import logoImg from "../../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
    const themeContext = useContext(ThemeContext);
    console.log(themeContext.toggleTheme)
    return (
        <header className="main-header">
            <Navbar expand="lg">
                <Link to="/" className="navbar-brand">
                    <img src={logoImg} className="app-logo" alt="logo" />
                </Link>
                <Nav className="ml-auto">
                    <NavDropdown alignRight className="ml-auto user-menu-dropdown" title={"Jason Bourne"} id="basic-nav-dropdown">
                        <NavLink to="/channel" className="dropdown-item" activeClassName="active">Your Channel</NavLink>
                        <NavLink to="/profile" className="dropdown-item" activeClassName="active">Profile</NavLink>
                        <FormCheck
                            type="switch"
                            className="dropdown-item"
                            id="custom-switch"
                            onChange={themeContext.toggleTheme}
                            label="Dark Mode"
                        />
                        <NavDropdown.Divider />
                        <NavLink to="/logout" className="dropdown-item" activeClassName="active">Logout</NavLink>
                    </NavDropdown>
                    <LoginSignupModal />
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;
