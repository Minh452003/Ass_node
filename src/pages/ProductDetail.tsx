import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { IProduct, IProps } from '../interfaces/products';
import { get } from '../api/product';

type ProductDetailProps = {
    products: IProduct[],
}

const ProductDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct);

    useEffect(() => {

        (async () => {
            if (id) {
                const { data } = await get(id);
                setProduct(data);
            }

        })()

        // setProduct(data);
    }, [props])
    return (
        <div className="container">
            <div className="heading-section">
                <h2>CHI TIẾT SẢN PHẨM</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={product?.image} alt="" className='anh1' />
                </div>
                <div className="col-md-6">
                    <div className="product-dtl">
                        <div className="product-info">
                            <div className="product-name">Tên dự án: {product?.duan}</div>
                            <div className="reviews-counter">
                                <span style={{ fontSize: '16px', fontWeight: '600' }}>Tác giả: {product?.name}</span>
                            </div>
                            <div className="product-price-discount">Ngày đăng: <span>{product?.createdAt}</span>
                            </div>
                        </div>

                        <Link className='btn btn-info btn-block' to={product?.linkgit}>LINK GIT</Link>
                        <Link className='btn btn-success btn-block' to={product?.linkgit}>LINK PREVIEW</Link>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="product-info-tabs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link1 active" id="description-tab" data-toggle="tab" href="#description"
                                    role="tab" aria-controls="description" aria-selected="true">Thông Tin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link1" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                    aria-controls="review" aria-selected="false">Reviews (0)</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="description" role="tabpanel"
                                aria-labelledby="description-tab">
                                {product?.description}
                            </div>
                            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                <div className="review-heading">REVIEWS</div>
                                <p className="mb-20">There are no reviews yet.</p>
                                <form className="review-form">
                                    <div className="form-group">
                                        <label>Đánh giá</label>
                                        <div className="reviews-counter">

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nội dung</label>
                                        <textarea className="form-control" rows={10}></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder="Email Id*" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="round-black-btn">Gửi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-light mb-3">
                <div style={{ textAlign: 'center' }} className="card-header bg-warning text-white text-uppercase">Đánh giá</div>
                <div className="card-body">
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                    </div>
                    <div className="comment-box text-center">
                        <h4>Để lại bình luận</h4>
                        <form action="" method="post">
                            <div className="comment-area"><textarea className="form-control" placeholder="Nội dung..."
                                rows={4} name="noidung"></textarea></div>
                            <div className="text-center mt-4"><input className='btn btn-danger' type="submit" name="guibinhluan" value="Gửi bình luận" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductDetail