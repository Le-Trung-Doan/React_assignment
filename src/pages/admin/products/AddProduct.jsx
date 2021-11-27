import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddProduct = ({ categories, brands, onAdd }) => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // onAdd(data);
        navigate("/admin/product", { replace: true });
    }

    const addProductFrom = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Thêm sản phẩm</h3>

                <div className="content__box-product-add-field">
                    <label htmlFor>Danh mục :</label>
                    <select {...register("cate_id", { required: true })} className="select-value">
                        {categories && categories.map(
                            (item, index) => {
                                return (
                                    <option key={index} value={item.id}>{item.name}</option>
                                );
                            })}
                    </select>
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên sản phẩm :</label>
                    <input type="text" placeholder="Tên sản phẩm" className="input-txt" {...register('name', { required: true })} />
                    {errors.name && <p>Field is required</p>}
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Ảnh sản phẩm :</label>
                    <input type="file" {...register('image')} placeholder="ảnh sp" className="input-txt" />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Giá sản phẩm :</label>
                    <input type="number" placeholder="giá sp" className="input-txt" {...register('price', { required: true })} />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Thương hiệu :</label>
                    <select {...register('brand_id', { required: true })} id className="select-value">
                        {brands && brands.map(
                            (item, index) => {
                                return (
                                    <option value={item.id}>{item.name}</option>
                                );
                            }
                        )}
                    </select>
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Sale :</label>
                    <input type="number" {...register('sale', { required: true })} placeholder="giảm giá" className="input-txt" />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Số lượng :</label>
                    <input type="number" {...register('quantity', { required: true })} placeholder="số lượng" className="input-txt" />
                </div>
                <div className="content__box-product-add-field editer">
                    <label htmlFor className="label-editer">Mô tả :</label>
                    <textarea {...register('deacription', { required: true })} id cols={30} rows={10} placeholder="mô tả" className="txt-box" defaultValue={""} />
                </div>
                <div className="content__box-product-add-btn">
                    <button className="content__box-product-btn" name="btnSend">Thêm sản phẩm</button>
                </div>
            </form>
        );
    };
    return <div>{addProductFrom()}</div>
};
export default AddProduct;