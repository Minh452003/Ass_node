import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Input, Row, Image } from 'antd';
import { IResume } from '../../../interfaces/resumes';
interface IUpdate {
    resumes: IResume[];
    onUpdateRe: (resume: IResume) => void
}
const UpdateResume = (props: IUpdate) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [resume, setResume] = useState<IResume>();

    useEffect(() => {
        const currentRe = props.resumes.find((resume: IResume) => resume._id == id);
        setResume(currentRe);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [resume])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: resume?._id,
            title: resume?.title,
            timeline: resume?.timeline,
            description: resume?.description,
        })
    }


    const onFinish = (values: IResume) => {
        props.onUpdateRe(values);
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

export default UpdateResume