import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Input, Row, Image } from 'antd';
import { IService } from '../../../interfaces/services';
import PrivateRoute from '../../../PrivateRouter';
interface IUpdate {
    services: IService[];
    onUpdateSe: (service: IService) => void
}
const UpdateService = (props: IUpdate) => {
    PrivateRoute();
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState<IService>();

    useEffect(() => {
        const currentSe = props.services.find((service: IService) => service._id == id);
        setService(currentSe);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [service])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: service?._id,
            title: service?.title,
            description: service?.description,
        })
    }


    const onFinish = (values: IService) => {
        props.onUpdateSe(values);
        navigate("/admin/services");
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
                            label="Service Title"
                            name="title"
                            hasFeedback
                            rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Service Description"
                            name="description"
                            hasFeedback
                            rules={[{ required: true, message: 'Mô tả không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                ADD SERVICE
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default UpdateService