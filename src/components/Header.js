import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link to="showcase" className="navbar-brand" href="">Rahul Khunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#0">About</a>
                            </li>
                            <li className="nav-item">
                                <Link to="skills" className="nav-link" href="">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
