import { PlusSquareOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { IProduct } from '../interfaces/products'
import { ICategory } from '../interfaces/categories'
import { getCategory } from '../api/category'
import { getAll } from '../api/product'
import { Image } from 'antd'
type Props = {
    products: IProduct[],
    categories: ICategory[]
}

const CategoryDetail = (props: Props) => {
    const { id } = useParams();
    const [category, setCategory] = useState<ICategory>({} as ICategory);
    const [product, setProduct] = useState<IProduct[]>([]);

    useEffect(() => {

        (async () => {
            if (id) {
                const { data } = await getCategory(id);
                setCategory(data);
            }

        })()

        // setProduct(data);
    }, [props])
    useEffect(() => {
        (async () => {

            const { data: { docs } } = await getAll();
            const newProducts = docs.filter((item: IProduct) => item.categoryId == id);
            setProduct(newProducts);


        })()
    }, [props])

    return (
        <div>
            <div className="container-fluid tm-container-content tm-mt-60" id="projects">
                <div className="row mb-4">
                    <h2 className="mb-5 pb-4"><span className="text-danger">MY</span> PROJECTS</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-3">
                                <div className="card bg-light mb-3">
                                    <form className="pb-3" action="" method="post">
                                        <div className="input-group">
                                            <input type="text" className='form-control' placeholder="Tìm kiếm sản phẩm..." />
                                            <div className="input-group-append">
                                                <input type="submit" className='btn btn-success' value="Tìm kiếm" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="card-header bg-secondary text-white text-uppercase"><i className="fa fa-list"></i> Danh mục
                                    </div>
                                    <ul className="list-group category_block">
                                        {props.categories.map((category: any) => {
                                            return <li className="list-group-item" key={category._id}><Link style={{ textDecoration: 'none' }} to={`/categories/${category._id}`}>{category.name}</Link></li>
                                        })}

                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div style={{ height: 50 }} className="card-header bg-success text-white text-uppercase text-center">
                                    <PlusSquareOutlined /> <p style={{ marginTop: 1 }}>Sản phẩm mới nhất</p>
                                </div>
                                <div className="row">
                                    {product.map((product: IProduct) => {
                                        return <div className="col-12 col-md-6 col-lg-4 mt-2" key={product._id}>
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
                                                            <p style={{ fontSize: 18 }} className="btn ">{product.name}</p>
                                                        </div>
                                                    </div>
                                                    <Link className='btn btn-primary btn-block' to={`/products/${product._id}`}>XEM CHI TIẾT</Link>
                                                </div>
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row tm-mb-90 tm-gallery">
                </div>
            </div>
        </div>
    )
}

export default CategoryDetail