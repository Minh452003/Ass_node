import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from 'antd';
import { IProduct, IUpdate } from '../../interfaces/products';

const UpdateProduct = (props: any) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const currentProduct = props.products.find((product: IProduct) => product._id == id);
        setProduct(currentProduct);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [product])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: product?._id,
            duan: product?.duan,
            name: product?.name,
            linkgit: product?.linkgit,
            linkprv: product?.linkprv,
            image: product?.image,
            description: product?.description,
            categoryId: product?.categoryId
        })
    }


    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate("/admin/products");
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off" >

                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


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
                        UPDATE PRODUCT
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct