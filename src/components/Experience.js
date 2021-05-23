import React from 'react';

class Experience extends React.Component {

    render() {
        return (
            <div id="experience" className="">
                <br />
                <br />
                <div className="container px-4">

                    <p className="h3 fw-bold mb-3">Experience</p>
                    <p className="h5 mb-3">I have 5+ years of experience in developing interactive UI/UX web apps</p>

                    <br />

                    <div className="row">
                        <div className="col-12 col-sm-2">
                            <div className="exp-image-container">
                                <img src={process.env.PUBLIC_URL + '/techup-logo.svg'}
                                    className="img-fluid exp-image" alt="Techup Labs Logo">
                                </img>
                            </div>
                        </div>
                        <div className="col-12 col-sm-10">
                            <div className="exp-desc">
                                <p className="h4 fw-bold mb-1">Sr. Software Engineer</p>
                                <p className="mb-1">July 2019 - Present</p>
                                <p>
                                    Working mainly on the frontend with angular framework
                                </p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-12 col-sm-2">
                            <div className="exp-image-container">
                                <img src={process.env.PUBLIC_URL + '/eronkan-logo.svg'}
                                    className="img-fluid exp-image" alt="Eronkan Logo">
                                </img>
                            </div>
                        </div>
                        <div className="col-12 col-sm-10">
                            <div className="exp-desc">
                                
                                <p className="h4 fw-bold mb-1">Sr. Software Engineer</p>
                                <p className="fw-bold">August 2019 - June 2020</p>
                                <p>
                                    EroNkan’s Industrial IoT Platform provides world class infrastructure that enables IoT technology to be applied across various industries and verticals.
                                </p>
                                <ul>
                                    <li>Responsible for developing backend as well as frontend features.</li>
                                    <li>Involved in various phases such as requirements gathering, design, implementation strategy, development, sales etc.</li>
                                    <li>Guided Junior developers in overcoming technical challenges.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-12 col-sm-2">
                            <div className="exp-image-container">
                                <img src={process.env.PUBLIC_URL + '/einfochips.png'}
                                    className="img-fluid exp-image" alt="eInfochips Logo">
                                </img>
                            </div>
                        </div>
                        <div className="col-12 col-sm-10">
                            <div className="exp-desc">
                                <p className="h4 fw-bold mb-1">Sr. Software Engineer</p>
                                <p className="mb-1">July 2015 - August 2019</p>
                                <p>
                                    Developed IOT based cross-platform mobile applications using angularJS and ionic framework. Ahmedabad, India Involved in creating interactive UI and feature implementation of large-scale mobile application for home automation and security.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Experience;
