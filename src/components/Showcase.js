import React from 'react';

class Showcase extends React.Component {

    render() {
        return (
            <div id="showcase" className="container showcase-container">

                <div className="row align-items-center h-100 d-none d-sm-flex">
                    <div className="col">
                        <p className="h3 mb-0 text-muted">Hello !</p>
                        <p className="h1 mb-0 text-primary">I'm Rahul</p>
                        <p className="h4 mb-0 text-muted">I'm a <span className="fw-bold">full stack</span> developer</p>
                        <br />
                        <p className="h4 text-muted">I specialize in developing and deploying responsive websites and web applications</p>
                    </div>
                    <div className="col">
                        <div className="showcase-image">
                            <img src={process.env.PUBLIC_URL + '/profile.jpeg'}
                                className="img-fluid img-thumbnail rounded-circle" alt="...">
                            </img>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center h-100 d-flex d-sm-none">
                    <div className="card border-0">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/profile.jpeg'}
                                className="img-fluid img-thumbnail rounded-circle" alt="...">
                            </img>
                        </div>
                        <div className="card-body">
                        <p className="h3 mb-0 text-muted">Hello !</p>
                            <p className="h1 mb-0 text-primary">I'm Rahul</p>
                            <p className="h4 mb-0 text-muted">I'm a <span className="fw-bold">full stack</span> developer</p>
                            <br />
                            <p className="h4 text-muted">I specialize in developing and deploying responsive websites and web applications</p>
                        </div>
                    </div>
                </div>

                

            </div>
        );
    }
}

export default Showcase;
