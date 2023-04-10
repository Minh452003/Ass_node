import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Signin from './pages/sign/signin';
import { addProduct, getAll, removeProduct, updateProduct } from "./api/product";
import RootLayout from "./component/rootLayout";
import AdminLayout from "./component/adminLayout";
import { IProduct } from './interfaces/products';
import { ICategory } from './interfaces/categories';
import { addCategory, getAllCategory, removeCategory, updateCategory } from './api/category';
import CategoryPage from './pages/admin/category/CategoryPage';
import AddCategory from './pages/admin/category/AddCategory';
import UpdateCategory from './pages/admin/category/updateCategory';
import { signUp } from './api/auth';
import { IUser } from './interfaces/user';
import SignUp from './pages/sign/signup';
import "./App.css"
import CategoryDetail from './pages/CategoryDetail';
import ProductsPage from './pages/Products';
import BlogManager from './pages/admin/Blog/BlogManager';
import { IBlog } from './interfaces/blogs';
import { addBlog, getAllBlog, removeBlog, updateBlog } from './api/blog';
import AddBlog from './pages/admin/Blog/AddBlog';
import UpdateBlog from './pages/admin/Blog/UpdateBlog';
import ResumeManager from './pages/admin/Resume/ResumeManager';
import { IResume } from './interfaces/resumes';
import { addRe, getAllRe, removeRe, updateRe } from './api/resume';
import AddResume from './pages/admin/Resume/AddResume';
import UpdateResume from './pages/admin/Resume/UpdateResume';
import { IService } from './interfaces/services';
import { addSe, getAllSe, removeSe, updateSe } from './api/service';
import ServiceManager from './pages/admin/service/ServiceManager';
import AddService from './pages/admin/service/AddService';
import UpdateService from './pages/admin/service/UpdateService';
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAll();
      setProducts(data.docs);
    })()
  }, [setProducts])

  const OnhandleRemove = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeProduct(id).then(() => {
        const newProducts = products.filter((product) => product._id != id);
        setProducts(newProducts)
      })

    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => alert("Thêm sản phẩm thành công"));
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item._id == product._id ? product : item))).then(() => alert("Cập nhật sản phẩm thành công"));
  }
  // Category
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      setCategories(data);
    })()
  }, [])
  const OnhandleRemoveCate = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeCategory(id).then(() => {
        const newCategories = categories.filter((category) => category._id != id);
        setCategories(newCategories);
      })
    }
  }
  const onHandleAddCate = async (category: ICategory) => {

    const { data } = await addCategory(category);
    alert("Thêm sản phẩm thành công");
    setCategories([...categories, data]);
  }
  const onHandleUpdateCate = (category: ICategory) => {
    updateCategory(category).then(() => setCategories(categories.map(item => item._id == category._id ? category : item))).then(() => alert("Cập nhật danh mục thành công"));
  }
  // Blog
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllBlog();
      setBlogs(data);
    })()
  }, [])
  const OnhandleRemoveBlog = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeBlog(id).then(() => {
        const newBlog = blogs.filter((blog) => blog._id != id);
        setBlogs(newBlog);
      })
    }
  }
  const onHandleAddBlog = async (blog: IBlog) => {

    const { data } = await addBlog(blog);
    alert("Thêm bài viết thành công");
    setBlogs([...blogs, data]);
  }
  const onHandleUpdateBlog = (blog: IBlog) => {
    updateBlog(blog).then(() => setBlogs(blogs.map(item => item._id == blog._id ? blog : item))).then(() => alert("Cập nhật bài viết thành công"));
  }
  // Resume-------------------------------------------------------
  const [resumes, setResumes] = useState<IResume[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllRe();
      setResumes(data);
    })()
  }, [])
  const OnhandleRemoveRe = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeRe(id).then(() => {
        const newRe = resumes.filter((resume) => resume._id != id);
        setResumes(newRe);
      })
    }
  }
  const onHandleAddRe = async (resume: IResume) => {

    const { data } = await addRe(resume);
    alert("Thêm bài viết thành công");
    setResumes([...resumes, data]);
  }
  const onHandleUpdateRe = (resume: IResume) => {
    updateRe(resume).then(() => setResumes(resumes.map(item => item._id == resume._id ? resume : item))).then(() => alert("Cập nhật bài viết thành công"));
  }
  // Service-----------------------------------------------------------------------
  const [services, setServices] = useState<IService[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllSe();
      setServices(data);
    })()
  }, [])
  const OnhandleRemoveSe = (id: string | number) => {
    if (window.confirm("Bạn chắc chắn chứ?") == true) {
      removeSe(id).then(() => {
        const newSe = services.filter((service) => service._id != id);
        setServices(newSe);
      })
    }
  }
  const onHandleAddSe = async (service: IService) => {

    const { data } = await addSe(service);
    alert("Thêm bài viết thành công");
    setServices([...services, data]);
  }
  const onHandleUpdateSe = (service: IService) => {
    updateSe(service).then(() => setServices(services.map(item => item._id == service._id ? service : item))).then(() => alert("Cập nhật bài viết thành công"));
  }
  return (
    <div className="App" style={{ width: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<HomePage categories={categories} products={products} />} />
            <Route path="products" element={<ProductsPage products={products} />} />
            <Route path="products/:id" element={<ProductDetail products={products} />} />
            <Route path="categories/:id" element={<CategoryDetail categories={categories} products={products} />} />
            <Route path="contact" element="Contact Page" />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManagementPage categories={categories} products={products} onRemove={OnhandleRemove} />} />
              <Route path='add' element={<AddProduct categories={categories} products={products} onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProduct categories={categories} products={products} onUpdate={onHandleUpdate} />} />
            </Route>
            <Route path='categories'>
              <Route index element={<CategoryPage categories={categories} onRemoveCate={OnhandleRemoveCate} />} />
              <Route path='add' element={<AddCategory categories={categories} onAddCate={onHandleAddCate} />} />
              <Route path=':id/update' element={<UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate} />} />
            </Route>
            <Route path='blogs'>
              <Route index element={<BlogManager blogs={blogs} onRemoveBlog={OnhandleRemoveBlog} />} />
              <Route path='add' element={<AddBlog blogs={blogs} onAddBlog={onHandleAddBlog} />} />
              <Route path=':id/update' element={<UpdateBlog blogs={blogs} onUpdateBlog={onHandleUpdateBlog} />} />
            </Route>
            <Route path='resumes'>
              <Route index element={<ResumeManager resumes={resumes} onRemoveRe={OnhandleRemoveRe} />} />
              <Route path='add' element={<AddResume resumes={resumes} onAddRe={onHandleAddRe} />} />
              <Route path=':id/update' element={<UpdateResume resumes={resumes} onUpdateRe={onHandleUpdateRe} />} />
            </Route>
            <Route path='services'>
              <Route index element={<ServiceManager services={services} onRemoveSe={OnhandleRemoveSe} />} />
              <Route path='add' element={<AddService services={services} onAddSe={onHandleAddSe} />} />
              <Route path=':id/update' element={<UpdateService services={services} onUpdateSe={onHandleUpdateSe} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
