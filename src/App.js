import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { createProduct, listProduct, removeProduct, updateProduct } from "./api/productAPI";
import { createCategory, listCategory, removeCategory, updateCategory } from "./api/categoryAPI";
import { createUser, listUser, removeUser, updateUser } from "./api/userAPI";
import { createBrand, listBrand, removeBrand, updateBrand } from "./api/brandAPI";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LayoutWebsite from "./layout/LayoutWebsite";
import LayoutAdmin from "./layout/LayoutAdmin";
import AddProduct from "./pages/admin/products/AddProduct";
import ProductsWebsite from "./pages/website/Products";
import ProductDetail from "./pages/website/ProductDetail";
import EditProduct from "./pages/admin/products/EditProduct";
import ProductsManager from "./pages/admin/products/Products";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Categories from "./pages/admin/categories/Categories";
import Brand from "./pages/admin/brand/Brand";
import Slide_show from "./pages/admin/slide/Slide_show";
import Users from "./pages/admin/users/Users";
import Comments from "./pages/admin/comments/Comments";
import AddCategory from "./pages/admin/categories/AddCategory";
import EditCategory from "./pages/admin/categories/EditCategory";
import AddBrand from "./pages/admin/brand/AddBrand";
import EditBrand from "./pages/admin/brand/EditBrand";
import Signin from "./pages/website/Signin";
import Signup from "./pages/website/Signup";
import Home from "./pages/website/Home";
import PrivateAdmin from "./components/PrivateAdmin";
import 'antd/dist/antd.css';
import AdminHome from "./pages/admin/AdminHome";
import ProductCategory from "./pages/website/ProductCategory";




function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    listProduct().then(response => setProducts(response.data));
    listCategory().then(response => setCategories(response.data));
    listUser().then(response => setUsers(response.data));
    listBrand().then(response => setBrands(response.data));
  }, []);

  // -------------------product-----------------------------------------------------------

  // ---------add----
  const onHandelAdd = (product) => {
    const fakeProduct = { ...product };
    createProduct(fakeProduct).then((response) =>
      setProducts([...products, (response.data)])
    );
  }
  // ---------Update---
  const onHandelUpdate = (product) => {
    updateProduct(product).then(() => {
      const newPro = products.map((item) =>
        item.id === product.id ? product : item
      );
      setProducts(newPro);
    });
  }
  // --------Remove-------------------
  const onHandelRemove = (id) => {
    removeProduct(id).then(() => {
      const newProduct = products.filter((item) => item.id !== id);
      toast.success("xóa thà công");
      setProducts(newProduct);
    });
  };

  // -----------------------------------------Category--------------------------
  //  ---------add------------------------
  const onAddCategory = (category) => {
    const fakeCategy = { ...category };
    createCategory(fakeCategy).then((response) =>
      setCategories([...categories, response.data])
    );
  }

  //-----edit----------
  const onEditCategory = (category) => {
    updateCategory(category).then(() => {
      const newCategory = categories.map((item) =>
        item.id === category.id ? category : item
      );
      setProducts(newCategory);
    });
  }


  //----------------remove----------------------
  const onRemoveCategory = (id) => {
    removeCategory(id).then(() => {
      const newCategory = categories.filter((item) => item.id !== id);
      setCategories(newCategory);
    }
    );
  };


  //----------Brand--------------------------------------------------


  //----------------add----------
  const onAddBrand = (brand) => {
    const fakebrand = { ...brand };
    createBrand(fakebrand).then((response) =>
      setBrands([...brands, response.data])
    );
  }


  ////------edit----------------------------------------------------
  const onEditBrand = (brand) => {
    updateBrand(brand).then(() => {
      const newBrand = brands.map((item) =>
        item.id === brand.id ? brand : item
      );
    });
  };


  //----------------remove----------------------

  const onRemoveBrand = (id) => {
    removeBrand(id).then(() => {
      const newbrand = brands.filter((item) => item.id !== id);
      setBrands(newbrand);
    });
  };


  /////////////////////////////////////////////////////////////////////////////////

  return (

    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        {/* {JSON.stringify(products)} */}
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Home products={products} />} />
              <Route path="product" element={<ProductsWebsite products={products} category={categories}/>} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="category/:id" element={<ProductCategory products={products} category={categories} />} />
              <Route path="introduce" element={<div>introduce</div>} />
              <Route path="contact" element={<div>contact</div>} />

            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="admin/" element={<PrivateAdmin> <LayoutAdmin /> </PrivateAdmin>}>
            <Route index element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard product={products} category={categories} user={users} brand={brands} />} />


            <Route path="category" element={<Categories category={categories} onRemmove={onRemoveCategory} />} />
            <Route path="category/add" element={<AddCategory onAdd={onAddCategory} />} />
            <Route path="category/:id/edit" element={<EditCategory onUpdate={onEditCategory} />} />

            <Route path="brand" element={<Brand brand={brands} onRemmove={onRemoveBrand} />} />
            <Route path="brand/add" element={<AddBrand onAdd={onAddBrand} />} />
            <Route path="brand/:id/edit" element={<EditBrand onUpdate={onEditBrand} />} />

            <Route path="slide_show" element={<Slide_show />} />


            <Route path="users" element={<Users />} />
            <Route path="demo" element={<AdminHome />} />



            <Route path="comments" element={<Comments />} />


            <Route path="product" element={<ProductsManager brand={brands} product={products} category={categories} onRemove={onHandelRemove} />} />
            <Route path="product/add" element={<AddProduct brands={brands} categories={categories} onAdd={onHandelAdd} />} />
            <Route path="product/:id/edit" element={<EditProduct brands={brands} categories={categories} onUpdate={onHandelUpdate} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
