import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image, message, Upload } from 'antd';
import { IProps } from '../../interfaces/products';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import PrivateRoute from '../../PrivateRouter';

const AddProduct = (props: any) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    PrivateRoute();
    const CLOUD_NAME = "dkvghcobl";
    const PRESET_NAME = "upload-portfolio";
    const FOLDER_NAME = "ECMA";
    const [image, setImage] = useState<String>('');
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const onHandleSubmit = async (data: any) => {
        const file = data.image[0];
        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("file", file);
        const response = await axios.post(api, formData, {
            headers: {
                "Content-Type": "application/form-data"
            },
        });
        props.onAdd({ ...data, image: response.data.url });
        navigate("/admin/products");
    }    // const onFinish = async (values: any) => {
    //     props.onAdd(values);
    //     navigate("/admin/products");
    // }

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };
    return (
        <div>
            <Row>
                <Col span={12}><Image
                    width={'80%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                /></Col>
                <Col span={12}>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Tên dự án</label>
                            <input type="text" {...register('duan', { required: true })} className="form-control" />
                            {errors.duan && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tác giả</label>
                            <input type="text" {...register('name', { required: true })} className="form-control" />
                            {errors.name && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Link git</label>
                            <input type="text" {...register('linkgit', { required: true })} className="form-control" />
                            {errors.linkgit && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Link Preview</label>
                            <input type="text" {...register('linkprv', { required: true })} className="form-control" />
                            {errors.linkprv && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="file" {...register('image', { required: true })} className="form-control" />
                            {errors.image && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" {...register('description', { required: true })} cols={20} rows={5}></textarea>
                            {errors.description && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <select className="form-select" {...register('categoryId', { required: true })}>
                                <option selected disabled>Chọn danh mục</option>
                                {props.categories.map((category: any) => {
                                    return <option key={category._id} value={category._id}>{category.name}</option>

                                })}
                            </select>
                            {errors.categoryId && <span style={{ color: 'red' }}>Bắt buộc phải nhập trường này</span>}
                        </div>
                        <button style={{ width: "100%", height: 35 }} type="submit" className="btn btn-primary">ADD PRODUCT</button>
                    </form>
                    {/* <Form
                        layout="vertical"
                        name="basic"
                        labelCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Project Name"
                            name="duan"
                            hasFeedback
                            rules={[{ required: true, message: 'Tên dự án không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="User Name"
                            name="name"
                            hasFeedback
                            rules={[{ required: true, message: 'Tên không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product Link"
                            name="linkgit"
                            hasFeedback
                            rules={[{ required: true, message: 'Link git không đuợc để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product Preview"
                            name="linkprv"
                            hasFeedback
                            rules={[{ required: true, message: 'Link preview không đuợc để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            hasFeedback
                            rules={[{ required: true, message: 'Link ảnh không được để trống' }]}
                        >

                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Desc"
                            name="description"
                            hasFeedback
                            rules={[{ required: true, message: 'Mô tả không được để trống' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Select" name="categoryId" rules={[{ required: true, message: 'Danh mục không được để trống!' }]}>
                            <Select>
                                {props.categories.map((category: any) => {
                                    return <Select.Option key={category?._id} value={category._id}>{category.name}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                ADD PROJECT
                            </Button>
                        </Form.Item>
                    </Form> */}
                </Col>
            </Row>

        </div>
    )
}

export default AddProduct