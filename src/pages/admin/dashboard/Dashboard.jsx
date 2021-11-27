const Dashboard = (props) => {
    return (
        <div className="content__box-product ">
        <h3 className="content__box-header">Tất cả danh mục</h3>
        <div className="row col row-2">
          <div className="l-3 box-represent">
            <i className="fas fa-sitemap icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Danh mục SP</span>
              <span className="content__box-count">
              {props.category.length}
              </span>
            </div>
          </div>
          <div className="l-3 box-represent">
            <i className="fas fa-shopping-bag icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Số sản phẩm</span>
              <span className="content__box-count">
                {props.product.length}
              </span>
            </div>
          </div>
          <div className="l-3 box-represent">
            <i className="fas fa-gem icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Số thương hiệu</span>
              <span className="content__box-count">
                {props.brand.length}
              </span>
            </div>
          </div>
          <div className="l-3 col box-represent">
            <i className="fas fa-users icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Tài khoản User</span>
              <span className="content__box-count">
               {props.user.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Dashboard;