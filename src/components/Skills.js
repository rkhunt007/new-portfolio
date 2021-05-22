import React from 'react';

class Skills extends React.Component {

    render() {
        return (
            <div id="skills" className="skills">
                <br />
                <br />

                <div className="container px-4">
                    <p className="h3 fw-bold mb-3">Skills</p>
                    
                    <p className="h5 fw-bold mb-2">Languages & Frameworks</p>
                    <div className="d-flex flex-wrap">
                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/144/000000/javascript.png" alt="Javascript Logo"></img></div>
                            <span>Javascript</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/144/000000/typescript.png" alt="Typescript Logo"></img></div>
                            <span>Typescript</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML Logo"></img></div>
                            <span>HTML</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Logo"></img></div>
                            <span>CSS</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://i.ibb.co/zs6B3yR/sass.png" alt="SASS Logo"></img></div>
                            <span>SASS</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/48/000000/angularjs.png" alt="Angular Logo"></img></div>
                            <span>Angular</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/144/000000/nodejs.png" alt="Node Logo"></img></div>
                            <span>Node</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://i.ibb.co/ZVh01dm/rsz-mong2.png" alt="MongoDB Logo"></img></div>
                            <span>MongoDB</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://i.ibb.co/zx0Tt9M/bootstrap.png" alt="Bootstrap Logo"></img></div>
                            <span>Bootstrap</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/windows/96/ffffff/ember.png" alt="Ember Logo"></img></div>
                            <span>Ember</span>
                        </div>

                    </div>

                    <br />

                    <p className="h5 fw-bold mb-2">Tools & Services</p>
                    <div className="d-flex flex-wrap">

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/ios-filled/100/ffffff/github.png" alt="Github Logo"></img></div>
                            <span>Github</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/fluent/48/ffffff/visual-studio-code-2019.png" alt="VS Code Logo"></img></div>
                            <span>VS Code</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/color/96/ffffff/npm.png" alt="NPM Logo"></img></div>
                            <span>NPM</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/wired/128/ffffff/postman-api.png" alt="Postman Logo"></img></div>
                            <span>Postman</span>
                        </div>

                        <div className="item m-3">
                            <div className="img-container"><img src="https://img.icons8.com/windows/96/ffffff/gulp.png" alt="Gulp Logo"></img></div>
                            <span>Gulp</span>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Skills;
