import React from 'react'

type Props = {}

const Infomation = (props: Props) => {
    return (
        <div className="container-fluid" >
            <div className="row about-section" id="about">

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Tôi là ai ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">
                        Một sinh viên thiết kế/phát triển web trên Trái đất đáng yêu của chúng ta. </h5>
                    <p className="mt-20">Tôi hiện đang là sinh viên kỳ 6 Cao Đẳng FPT Polytechnic, với mục tiêu trở thành Front End Developer</p>
                    <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Thông tin cá nhân</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Ngày sinh</span>:04/05/2003</li>
                        <li><span>Email</span>: Phungquangminh342003@gmail.com </li>
                        <li><span>Điện thoại</span>: 0367233265</li>
                        <li><span>Địa chỉ</span>:Lê Đức Thọ.Nam Từ Liêm,hà Nội </li>
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
                    <h3 className="font-weight-light">Chuyên môn của tôi</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Development</h6>
                            <p className="subtitle">Basic website design .</p>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Development.</h6>
                            <p className="subtitle">Basic website design .</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Infomation