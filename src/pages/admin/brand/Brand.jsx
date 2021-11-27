import { Link } from "react-router-dom";

const Brand = ({brand, onRemmove}) => {
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Danh sách thương hiệu</h3>
            <Link to="add" className="content__box-add">Thêm thương hiệu</Link>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên thương hiệu</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>

                <tbody>
                    {brand && brand.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`${item.id}/edit`} className="link-function btn-repair">Sửa</Link>
                                    <button onClick={() => onRemmove(item.id)}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Brand;