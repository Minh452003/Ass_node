import React from 'react'

type Props = {}

const Resume = (props: Props) => {
    return (
        <div className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">MY</span> RESUME</h2>
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <div className="mt-2">
                                <h4>Expertise & Education</h4>
                                <span className="line"></span>
                            </div>
                        </div>

                        <div className="card-body">
                            <h6 className="title text-danger"></h6>
                            <p></p>
                            <p className="subtitle"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume