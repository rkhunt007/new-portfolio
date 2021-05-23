import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div id="contact" className="contact">
                <br />
                <br />

                <div className="container px-4">
                    <p className="h3 fw-bold mb-3">Contact</p>

                    <div className="mb-3">
                        <a href="mailto:rkhunt007@gmail.com" className="text-white">
                            <span className="fas fa-at fa-sm fa-icon fa-fw"></span>
                            <span className="ms-2">rkhunt007@gmail.com</span>
                        </a>
                    </div>

                    <div className="mb-3">
                        <a href="https://www.linkedin.com/in/rahul-k-93b032b1" target="_blank" rel="noreferrer" className="text-white">
                            <span className="fab fa-linkedin fa-sm fa-icon fa-fw"></span>
                            <span className="ms-2">Rahul Khunt</span>
                        </a>
                    </div>

                    <br />

                    <p className="h3 fw-bold mb-3">Profiles</p>
                    <div className="mb-3">
                        <a href="https://github.com/rkhunt007" target="_blank" rel="noreferrer" className="text-white">
                            <span className="fab fa-github fa-sm fa-icon fa-fw"></span>
                            <span className="ms-2">rkhunt007</span>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a href="https://stackoverflow.com/users/8229960/rahul-khunt" target="_blank" rel="noreferrer" className="text-white">
                            <span className="fab fa-stack-overflow fa-sm fa-icon fa-fw"></span>
                            <span className="ms-2">rahul-khunt</span>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a href="https://twitter.com/rkhunt619" target="_blank" rel="noreferrer" className="text-white">
                            <span className="fab fa-twitter fa-sm fa-icon fa-fw"></span>
                            <span className="ms-2">rkhunt619</span>
                        </a>
                    </div>

                    {/* <div>
                        <GithubCard />
                    </div> */}

                </div>
                <br />
            </div>
        );
    }
}

export default Contact;
