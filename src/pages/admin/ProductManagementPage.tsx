import React from 'react'
import { Space, Table, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const ProductManagementPage = (props: any) => {

    const data = props.products.map((product: any) => {
        return {
            key: product._id,
            duan: product.duan,
            name: product.name,
            linkgit: <Link to={product.linkgit}>Xem Ngay</Link>,
            linkprv: <Link to={product.linkprv}>Xem Ngay</Link>,
            image: <img width={50} src={product.image} alt="" />,
            description: product.description,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        }
    });
    const removeProduct = (id: string | number) => {
        props.onRemove(id);
    }
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Project Name',
            dataIndex: 'duan',
            key: 'duan',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Project User',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Project Link',
            dataIndex: 'linkgit',
            key: 'linkgit',
        },
        {
            title: 'Project Preview',
            dataIndex: 'linkprv',
            key: 'linkprv',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Product Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Product createdAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Product updatedAt',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 10 }} />
        </div>
    )
}

export default ProductManagementPage