import instance from "./instance";

export const createProduct = (product) => {
    const url = "/products";
    return instance.post(url, product, {headers: { 
      'x-apikey': '59a7ad19f5a9fa0808f11931',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }});
  };
  export const listProduct = () => {
    const url = "/products";
    return instance.get(url);
  };
  export const readProduct = (id) => {
    const url = "/products/" + id;
    return instance.get(url);
  };
  export const removeProduct = (id) => {
    const url = "/products/" + id;
    return instance.delete(url);
  };
  export const updateProduct = (product) => {
    const url = "/products/" + product.id;
    return instance.patch(url, product);
  };
  // GET /product => Hien thi danh sach
  // GET /product/:id => Chi tiet san pham
  // POST /product => Them san pham
  // DELETE /product/:id => Xoa san pham
  // PATCH /product/:id => cap nhat san pham