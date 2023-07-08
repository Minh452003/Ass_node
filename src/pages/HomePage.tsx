import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Infomation from '../component/Infomation';
import Resume from '../component/Resume';
import HouseWoker from '../component/HouseWoker';
import Service from '../component/Service';
import { Image } from 'antd';
import Contact from '../component/Contact';
import { IProduct } from '../interfaces/products';
import { ICategory } from '../interfaces/categories';
import { AiOutlineLink } from 'react-icons/ai'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

interface IProps {
    products: IProduct[],
    categories: ICategory[]
}
const HomePage = (props: IProps) => {
    return (
        <div>
            <Infomation />
            <Resume />
            <HouseWoker />
            <Service />
            <section className="section bg-dark py-5">
                <div className="container text-center">
                    <h2 className="text-light mb-5 font-weight-normal">Tôi sẵn sàng làm FreeLance
                    </h2>
                    <button className="btn bg-primary w-lg" >Thuê tôi</button>
                </div>
            </section>
            <br />
            <br />
            <section className="container" id="projects">
                <div className="row mb-4">
                    <h2 className="mb-5 pb-4"><span className="text-danger">DỰ ÁN</span> CỦA TÔI</h2>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                {/* {props.products.map((product: IProduct) => {
                                    return <div className="col-12 col-md-6 col-lg-3 mt-1" key={product._id}>
                                        <div className="card">
                                            <Image
                                                width={'100%'}
                                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ textAlign: 'center' }}><Link style={{ textDecoration: 'none' }} to={`/products/${product._id}`}>{product.duan}</Link>
                                                </h5>
                                                <div className="row">
                                                    <div className="col" style={{ textAlign: 'center' }}>
                                                        <p style={{ fontSize: 18 }} className="btn ">{product.description}</p>
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: 'center' }}>
                                                    <Link to={product.linkgit}><AiOutlineLink style={{ fontSize: '30px' }} /></Link>
                                                    <Link to={product.linkprv}><LiaExternalLinkAltSolid style={{ fontSize: '30px', marginLeft: '30px' }} /></Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                })} */}

                                <div className="col-12 col-md-6 col-lg-3 mt-1">
                                    <div className="card">
                                        <Image
                                            width={'100%'} height={'130px'}
                                            src="https://res.cloudinary.com/dkvghcobl/image/upload/v1688822037/czk12dhbckkwod5catbg.png"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: 'center' }}>BookShelf Online</h5>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center', height: '200px' }}>
                                                    <p style={{ fontSize: 18 }} className="btn ">Dự án của nhóm 6 lớp WD17303. Dự án gồm 4 thành viên, thiết kế 1 website bán sách trực tuyến. Sử dụng ngôn ngữ Angular,NodeJs và được quản lý bằng phần mềm Jira</p>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <Link to={'https://github.com/DU-AN-THUC-HIEN/Angular_WD17303'}><AiOutlineLink style={{ fontSize: '30px' }} /></Link>
                                                <Link to={''}><LiaExternalLinkAltSolid style={{ fontSize: '30px', marginLeft: '30px' }} /></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="col-12 col-md-6 col-lg-3 mt-1">
                                    <div className="card">
                                        <Image
                                            width={'100%'} height={'130px'}
                                            src="https://res.cloudinary.com/dkvghcobl/image/upload/v1688822297/amq9itkjgkijds3cndmr.png"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: 'center' }}>Portfolio</h5>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center', height: '200px' }}>
                                                    <p style={{ fontSize: 18 }} className="btn ">Dự án cá nhân.Sử dụng ngôn ngữ React,NodeJs,TypeScript. Sử dụng Ant Design và Boostrap để thiết kế giao diện</p>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <Link to={'https://github.com/Minh452003/Ass_node'}><AiOutlineLink style={{ fontSize: '30px' }} /></Link>
                                                <Link to={''}><LiaExternalLinkAltSolid style={{ fontSize: '30px', marginLeft: '30px' }} /></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="col-12 col-md-6 col-lg-3 mt-1" >
                                    <div className="card">
                                        <Image
                                            width={'100%'} height={'130px'}
                                            src="https://res.cloudinary.com/dkvghcobl/image/upload/v1688822643/pwjhz3ko9dtk4tftoewc.png"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: 'center' }}>ShelfPhone</h5>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center', height: '200px' }}>
                                                    <p style={{ fontSize: 18 }} className="btn ">Dự án cá nhân.Sử dụng ngôn ngữ React,NodeJs,TypeScript. Sử dụng Ant Design và Boostrap để thiết kế giao diện</p>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <Link to={'https://github.com/Minh452003/Ass_Type'}><AiOutlineLink style={{ fontSize: '30px' }} /></Link>
                                                <Link to={''}><LiaExternalLinkAltSolid style={{ fontSize: '30px', marginLeft: '30px' }} /></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row tm-mb-90 tm-gallery">
                </div>
            </section>
            <Contact />

        </div>
    )
}

export default HomePage