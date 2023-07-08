import React, { useEffect, useState } from 'react'
import { IService } from '../interfaces/services';
import { getAllSe } from '../api/service';

type Props = {}

const Service = (props: Props) => {
    const [services, setServices] = useState<IService[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await getAllSe();
            setServices(data);
        })()
    }, [])
    return (
        <div>
            <section className="section" id="service">
                <div className="container">
                    <h2 className="mb-5 pb-4"><span className="text-danger">DỊCH VỤ</span> CỦA TÔI</h2>
                    <div className="row">
                        {/* {services.map((service) => {
                            return <div className="col-md-4 col-sm-6" key={service._id}>
                                <div style={{ height: '80%' }} className="card mb-5">
                                    <div className="card-header has-icon">
                                        <i className="ti-vector text-danger" aria-hidden="true"></i>
                                    </div>
                                    <div className="card-body px-4 py-3">
                                        <h5 className="mb-3 card-title text-dark">{service.title}
                                        </h5>
                                        <p className="subtitle">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        })} */}
                        <div className="col-md-4 col-sm-6" >
                            <div style={{ height: '80%' }} className="card mb-5">
                                <div className="card-header has-icon">
                                    <i className="ti-vector text-danger" aria-hidden="true"></i>
                                </div>
                                <div className="card-body px-4 py-3">
                                    <h5 className="mb-3 card-title text-dark">Thiết kế Website Angular
                                    </h5>
                                    <p className="subtitle">Có thể thiết kế Website Angular ở mức độ cơ bản. Sử dụng Angular + Nodejs và database mongoDB để thiết kế</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-6" >
                            <div style={{ height: '80%' }} className="card mb-5">
                                <div className="card-header has-icon">
                                    <i className="ti-vector text-danger" aria-hidden="true"></i>
                                </div>
                                <div className="card-body px-4 py-3">
                                    <h5 className="mb-3 card-title text-dark">Thiết kế Website React
                                    </h5>
                                    <p className="subtitle">Có thể thiết kế Website React ở mức độ cơ bản. Sử dụng React + Nodejs và database mongoDB để thiết kế. Có thể dùng Ant Design thiết kế giao diện</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service