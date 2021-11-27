import { Link } from "react-router-dom";

const Home = ({ products }) => {
    return (
        <div className="app__container">
            <div className="grid wide">
        <div className="slide-show hide-on-mobile-tablet">
          <div className="slide-show__img" style={{backgroundImage: 'url(https://donghoduyanh.com/images/products/menufactories/resized/longines_1579150964.jpg)'}} />
          <img className="banner__img" src="https://donghothuysy.vn/images/slideshow/2020/01/17/compress/fc_1579234917.jpg" alt="" />
          <img src="http://luxurytime.in/wp-content/uploads/2018/09/hublot_banner.jpg" alt="" className="banner__img" />
        </div>
        <div className="col l-12 m-12 c-12">
              <div className="home-product">
                <div className="row sm-gutter">
                  {products && products.map((item, index) => {
                      return (
                          <div className="col l-2-4  c-6" key={index}>
                            <Link to={`product/${item.id}`} className="home-product-item">
                              <div className="home-product-item__img" style={{ backgroundImage: 'url(' + item.image +')' }}>
                              </div>
                              <h4 className="home-product-item__name">{item.name}</h4>
                              <div className="home-product-item__price">
                                <del className="home-product-item__price-old">{item.price}</del>
                                <span className="home-product-item__price-current">{item.sale}</span>
                              </div>
                              <div className="home-product-item__action">
                                <span className="home-product-item__like">
                                  <i className="home-product-item__like-icon-empty far fa-heart" />
                                  <i className="home-product-item__like-icon-fill fas fa-heart" />
                                </span>
                                <div className="home-product-item__rating">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star-half-alt" />
                                  <i className="far fa-star" />
                                </div>
                                <span className="home-product-item__sold">
                                  Đã bán 100
                                </span>
                              </div>
                              <div className="home-product-item__origin">
                                <span className="home-product-item__brand">{item.brand_id}</span>
                                <span className="home-product-item__origin-name">Nhật bản</span>
                              </div>
                              <div className="home-product-item__favourite">
                                <i className="fas fa-check" />
                                <span>Yêu thích</span>
                              </div>
                              <div className="home-product-item__sale-off">
                                <span className="home-product-item__sale-off-percent">{item.sale}%</span>
                                <span className="home-product-item__sale-off-label">GIẢM</span>
                              </div>
                            </Link>
                          </div>
                      );
                    })}
                </div>
              </div>
              <ul className="paginayion home-product__paginayion">
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">
                    <i className="paginayion-item__icon fas fa-chevron-left" />
                  </a>
                </li>
                <li className="paginayion-item paginayion-item--active">
                  <a href className="paginayion-item__link">1</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">2</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">3</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">4</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">5</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">...</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">14</a>
                </li>
                <li className="paginayion-item">
                  <a href className="paginayion-item__link">
                    <i className="paginayion-item__icon fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
      </div>
        </div>
    );
};
export default Home;