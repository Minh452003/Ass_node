import React from 'react'

type Props = {}

const Infomation = (props: Props) => {
    return (
        <div className="container-fluid" >
            <div className="row about-section" id="about">

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">
                        A web design/development student in our lovely Earth . </h5>
                    <p className="mt-20">I am currently a 5th semester student at FPT College, with the goal of becoming a Front End Developer</p>
                    <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span>:04/05/2003</li>
                        <li><span>Email</span>: Phungquangminh342003@gmail.com </li>
                        <li><span>Phone</span>: 0367233265</li>
                        <li><span>Skype</span>:Quang Minh </li>
                        <li><span>Address</span>:Lê Đức Thọ.Nam Từ Liêm,hà Nội </li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Development</h6>
                            <p className="subtitle">Basic website design .</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Development.</h6>
                            <p className="subtitle">Basic website design .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infomation