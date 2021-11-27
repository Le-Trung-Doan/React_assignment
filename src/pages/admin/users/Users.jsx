const Users = () => {
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Danh sách khách hàng</h3>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Ảnh đại diện</th>
                        <th>Phân quyền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="100px">1</td>
                        <td className="td-name">admin</td>
                        <td className="td-name">doan</td>
                        <td className="td-name">aaa</td>
                        <td className="td-name">
                            <img src="../img/<?php echo $user['avatar'] ?>" alt="" width="100px" height="100px" />
                        </td>
                        <td className="td-name">
                  //////////
                        </td>
                        <td className="td-function" width="200px">
                            <a href="<?php echo $edit ?>" className="link-function btn-repair" style={{ marginRight: '20px' }}>Sửa</a>
                            <a onclick="return del('<?php echo $user['account']; ?>')" href="<?php echo $delete ?>" className="link-function btn-delete" name="btnDelete">Xóa</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Users;