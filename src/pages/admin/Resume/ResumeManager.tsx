import React from 'react'
import { ColumnsType } from 'antd/es/table';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import { IResume } from '../../../interfaces/resumes';
import PrivateRoute from '../../../PrivateRouter';
interface IProps {
    resumes: IResume[]
    onRemoveRe: (id: string | number) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const ResumeManager = (props: any) => {
    PrivateRoute();

    const data = props.resumes.map((resume: IResume) => {
        return {
            key: resume._id,
            title: resume.title,
            timeline: resume.timeline,
            description: resume.description
        }
    });
    const removeRe = (id: string) => {
        props.onRemoveRe(id);
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Resume Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Resume Timeline',
            dataIndex: 'timeline',
            key: 'timeline',
        },
        {
            title: 'Resume Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/resumes/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeRe(record.key)}>Remove</Button>
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

export default ResumeManager