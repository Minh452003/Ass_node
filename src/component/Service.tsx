import React from 'react'

type Props = {}

const Service = (props: Props) => {
    return (
        <div>
            <section className="section" id="service">
                <div className="container">
                    <h2 className="mb-5 pb-4"><span className="text-danger">MY</span> SERVICE</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="card mb-5">
                                <div className="card-header has-icon">
                                    <i className="ti-vector text-danger" aria-hidden="true"></i>
                                </div>
                                <div className="card-body px-4 py-3">
                                    <h5 className="mb-3 card-title text-dark">
                                    </h5>
                                    <p className="subtitle"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service