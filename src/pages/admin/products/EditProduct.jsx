import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { readProduct } from "../../../api/productAPI";

const EditProduct = (props) => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        readProduct(id).then((response) => {
            setProduct(response.data);
            reset(response.data);
        })
    }, [id]);

    const onSubmit = (data) => {
        props.onUpdate({id, ...data});
    }

    const addProductFrom = () => {
        return (
            <form action className="content__box-product-add" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Sửa sản phẩm</h3>

                <div className="content__box-product-add-field">
                    <label htmlFor>Danh mục :</label>
                    <select {...register("cate_id")} className="select-value">
                        {props.categories && props.categories.map(
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
                    <input type="text" {...register('image')} placeholder="ảnh sp" className="input-txt" />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Giá sản phẩm :</label>
                    <input type="number" placeholder="giá sp" className="input-txt" {...register('price', { required: true })} />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Thương hiệu :</label>
                    <select {...register('brand_id', { required: true })} id className="select-value">
                        {props.brands && props.brands.map(
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
                    <button className="content__box-product-btn">sửa sản phẩm</button>
                    <button onClick={() => navigate(-1)}>Hủy</button>
                </div>
            </form>
        )
    };
    return <div>{addProductFrom()}</div>
};
export default EditProduct;