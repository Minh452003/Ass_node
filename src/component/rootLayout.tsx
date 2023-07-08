import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Input, Space, MenuProps } from 'antd';
import $ from 'jquery';

import {
    HddOutlined,
    FileOutlined,
    HomeOutlined,
    ProjectOutlined,
    LogoutOutlined,
    LoginOutlined,
    AntDesignOutlined
} from '@ant-design/icons'; type Props = {}

const { Header, Content, Footer } = Layout;
const onSearch = (value: string) => console.log(value);
const { Search } = Input;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label?: React.ReactNode,
    key?: React.Key,
    icon?: React.ReactNode,
    to?: string,
    children?: MenuItem[],

): MenuItem {
    return {
        key,
        icon,
        children,
        label: to ? <Link to={to} > {label}</Link> : label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '1', <HomeOutlined />, '/'),
    getItem('Products ', '2', <HddOutlined />, '/products'),
    getItem('About ', '3', <HddOutlined />, '/about'),
    getItem('Contact', '4', <FileOutlined />, '/contact'),
    getItem('Signin ', '5', <LoginOutlined />, '/signin'),
    getItem('Signup ', '6', <AntDesignOutlined />, '/signup'),
];
const RootLayout = (props: Props) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <header className="header">
                <div className="container">
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                    </ul>
                    <div className="header-content">
                        <h4 className="header-subtitle" >Xin Chào, Tôi Là</h4>
                        <h1 className="header-title">Minh</h1>
                        <h6 className="header-mono" >Frond end Designer | Developer</h6>
                    </div>
                </div>
            </header>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Trang Chủ</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">Thông Tin</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resume" className="nav-link">Hồ Sơ</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <Link to={'/signin'}><img src="https://res.cloudinary.com/dkvghcobl/image/upload/v1676792388/ECMA/cgevzpzpo1esjgieg24i.jpg" alt="" className="brand-img" /></Link>
                            <li className="brand-txt">
                                <h5 className="brand-title">John Doe</h5>
                                <div className="brand-subtitle">Web Designer | Developer</div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#projects" className="nav-link">Dự Án</a>
                            </li>
                            <li className="nav-item last-item">
                                <a href="#blog" className="nav-link">Bài Viết</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Liên Hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main><Outlet /></main>
            <footer className="footer py-3">
                <div className="container">
                    <p className="small mb-0 text-light"> Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" target="_blank"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">DevCRUD</span></a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default RootLayout