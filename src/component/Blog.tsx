import React from 'react'

type Props = {}

const Blog = (props: Props) => {
    return (
        <section className="section" id="blog">
            <div className="container">
                <h2 className="mb-5">LATEST <span className="text-danger">NEWS</span></h2>
                <div className="row">
                    <div className="blog-card">
                        <div className="img-holder">
                            <img src="" alt="" className="img2" />
                        </div>
                        <div className="content-holder">
                            <h6 className="title"></h6>

                            <p className="post-details">
                                <a href="#">By:</a>
                                <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                                <a href="#"><i className="ti-comment"></i> 123</a>
                            </p>

                            <p></p>

                            <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog