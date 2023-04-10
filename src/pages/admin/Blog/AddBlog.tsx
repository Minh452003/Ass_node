import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image } from 'antd';
import { IBlog } from '../../../interfaces/blogs';
import PrivateRoute from '../../../PrivateRouter';
interface IProps {
    blogs: IBlog[];
    onAddBlog: (blog: IBlog) => void
}
const AddBlog = (props: IProps) => {
    PrivateRoute();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onAddBlog(values);
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
                        layout="vertical"
                        name="basic"
                        labelCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
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
                                ADD BLOG
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default AddBlog