import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        onAdd(data);
        navigate("/admin/category", { replace: (true) });
    };

    const AddCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Thêm danh mục</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên danh mục :</label>
                    <input type="text" placeholder="tên danh mục" className="input-txt" {...register("name", { required: true })} />
                    {errors.name && <p>Field is required</p>}
                </div>
                <div className="content__box-product-add-btn" >
                    <button className="content__box-product-btn">Thêm danh mục</button>
                </div>
            </form>
        );
    };

    return (
        <div><AddCategoryForm /></div>
    );
};
export default AddCategory;