import React from 'react'
import { ColumnsType } from 'antd/es/table';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import { IService } from '../../../interfaces/services';
import PrivateRoute from '../../../PrivateRouter';
interface IProps {
    services: IService[]
    onRemoveSe: (id: string | number) => void
}
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const ServiceManager = (props: any) => {
    PrivateRoute();
    const data = props.services.map((resume: IService) => {
        return {
            key: resume._id,
            title: resume.title,
            description: resume.description
        }
    });
    const removeSe = (id: string) => {
        props.onRemoveSe(id);
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Service Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Service Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/services/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeSe(record.key)}>Remove</Button>
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

export default ServiceManager