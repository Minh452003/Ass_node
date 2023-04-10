import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Input, Row, Image } from 'antd';
import { IBlog } from '../../../interfaces/blogs';
import PrivateRoute from '../../../PrivateRouter';
interface IUpdate {
    blogs: IBlog[];
    onUpdateBlog: (blog: IBlog) => void
}
const UpdateBlog = (props: IUpdate) => {
    PrivateRoute();
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<IBlog>();

    useEffect(() => {
        const currentBlog = props.blogs.find((blog: IBlog) => blog._id == id);
        setBlog(currentBlog);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [blog])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: blog?._id,
            title: blog?.title,
            author: blog?.author,
            image: blog?.image,
            description: blog?.description,
        })
    }


    const onFinish = (values: IBlog) => {
        props.onUpdateBlog(values);
        navigate("/admin/blogs");
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Row>
                <Col span={12}><Image
                    width={'80%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                /></Col>
                <Col span={12}>
                    <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        labelCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label=""
                            name="id"
                            style={{ display: 'none' }}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Blog Title"
                            name="title"
                            hasFeedback
                            rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Blog User"
                            name="author"
                            hasFeedback
                            rules={[{ required: true, message: 'Tác giả không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Blog Image"
                            name="image"
                            hasFeedback
                            rules={[{ required: true, message: 'Ảnh không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Blog Description"
                            name="description"
                            hasFeedback
                            rules={[{ required: true, message: 'Mô tả không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                UPDATE BLOG
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default UpdateBlog