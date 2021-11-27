import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsManager = (props) => {
  return (
    <div>
      <div className="content__box-product ">
        <h3 className="content__box-header">Danh sách sản phẩm</h3>
        <Link to="add" className="content__box-add">Thêm sản phẩm</Link>
        <table className="content__box-product-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Ảnh</th>
              <th>Giá sp</th>
              <th>Số lượng</th>
              <th>Sale</th>
              <th>Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {props.product && props.product.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{
                    props.category.map( (cate, index) => {
                       if(cate.id == item.cate_id ) {
                         return cate.name;
                       }
                      })
                  }</td>
                  <td>{
                        props.brand.map( (brand, index) => {
                          if(brand.id == item.brand_id ) {
                         return brand.name;
                          }
                        })
                      }</td>
                  <td className="td-img">
                  <img src={item.image} alt="" with={80}/>
                    {/* <img src={"http://localhost:8000/storage/"+item.image } alt="" with={80}/> */}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sale}%</td>
                  <td className="td-function">                    
                    <button onClick={() => props.onRemove(item.id)}>Remove</button>
                    <Link to={`${item.id}/edit`}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductsManager;