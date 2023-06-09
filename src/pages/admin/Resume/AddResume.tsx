import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image } from 'antd';
import { IResume } from '../../../interfaces/resumes';
import PrivateRoute from '../../../PrivateRouter';
interface IProps {
    resumes: IResume[];
    onAddRe: (resume: IResume) => void
}


const AddResume = (props: IProps) => {
    PrivateRoute();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onAddRe(values);
        navigate("/admin/resumes");
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
                            label="Resume Title"
                            name="title"
                            hasFeedback
                            rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Resume TimeLine"
                            name="timeline"
                            hasFeedback
                            rules={[{ required: true, message: 'Thời gian không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Resume Description"
                            name="description"
                            hasFeedback
                            rules={[{ required: true, message: 'Mô tả không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                ADD RESUME
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default AddResume