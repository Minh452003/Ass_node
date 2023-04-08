import React from 'react'
import { IBlog } from '../../../interfaces/blogs';
import { ColumnsType } from 'antd/es/table';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
    blogs: IBlog[]
    onRemoveBlog: (id: string | number) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const BlogManager = (props: any) => {
    const data = props.blogs.map((blog: IBlog) => {
        return {
            key: blog._id,
            title: blog.title,
            author: blog.author,
            image: <img width={50} src={blog.image} alt="" />,
            description: blog.description
        }
    });
    const removeBlog = (id: string) => {
        props.onRemoveBlog(id);
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Blog Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Blog User',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Blog Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Blog Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/blogs/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeBlog(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} />

        </div>
    )
}

export default BlogManager