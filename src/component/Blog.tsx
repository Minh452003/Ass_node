import React, { useEffect, useState } from 'react'
import { IBlog } from '../interfaces/blogs'
import { getAllBlog } from '../api/blog';

interface IProps {
    blogs: IBlog[]
}

const Blog = (props: any) => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await getAllBlog();
            setBlogs(data);
        })()
    }, [])
    return (
        <section className="section" id="blog">
            <div className="container">
                <h2 className="mb-5">LATEST <span className="text-danger">NEWS</span></h2>
                <div className="row">
                    {blogs.map((blog: IBlog) => {
                        return <div className="blog-card" key={blog._id}>
                            <div className="img-holder">
                                <img src={blog.image} alt="" className="img2" />
                            </div>
                            <div className="content-holder">
                                <h6 className="title">{blog.title}</h6>

                                <p className="post-details">
                                    <a href="#">By: {blog.author}</a>
                                    <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                                    <a href="#"><i className="ti-comment"></i> 123</a>
                                </p>

                                <p>{blog.description}</p>

                                <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                            </div>
                        </div>
                    })}


                </div>
            </div>
        </section>
    )
}

export default Blog