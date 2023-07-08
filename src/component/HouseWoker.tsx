import React from 'react'

type Props = {}

const HouseWoker = (props: Props) => {
    return (
        <div>
            <section className="section bg-dark text-center">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="row ">
                                <div className="col-5 text-right text-light border-right py-3">
                                    <div className="m-auto"><i className="ti-alarm-clock icon-xl"></i></div>
                                </div>
                                <div className="col-7 text-left py-3">
                                    <h1 className="text-danger font-weight-bold font40">100</h1>
                                    <p className="text-light mb-1">Số giờ làm việc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="row">
                                <div className="col-5 text-right text-light border-right py-3">
                                    <div className="m-auto"><i className="ti-layers-alt icon-xl"></i></div>
                                </div>
                                <div className="col-7 text-left py-3">
                                    <h1 className="text-danger font-weight-bold font40">4</h1>
                                    <p className="text-light mb-1">Dự án kết thúc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="row">
                                <div className="col-5 text-right text-light border-right py-3">
                                    <div className="m-auto"><i className="ti-face-smile icon-xl"></i></div>
                                </div>
                                <div className="col-7 text-left py-3">
                                    <h1 className="text-danger font-weight-bold font40">2</h1>
                                    <p className="text-light mb-1">Khách hàng hạnh phúc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="row">
                                <div className="col-5 text-right text-light border-right py-3">
                                    <div className="m-auto"><i className="ti-heart-broken icon-xl"></i></div>
                                </div>
                                <div className="col-7 text-left py-3">
                                    <h1 className="text-danger font-weight-bold font40">5</h1>
                                    <p className="text-light mb-1">Lần uống cà phê</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HouseWoker