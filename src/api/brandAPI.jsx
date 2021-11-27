import instance from "./instance";

export const createBrand = (brand) => {
    const url = "/brands";
    return instance.post(url, brand);
  };
  export const listBrand = () => {
    const url = "/brands";
    return instance.get(url);
  };
  export const readBrand = (id) => {
    const url = "/brands/" + id;
    return instance.get(url);
  };
  export const removeBrand = (id) => {
    const url = "/brands/" + id;
    return instance.delete(url);
  };
  export const updateBrand = (brand) => {
    const url = "/brands/" + brand.id;
    return instance.patch(url, brand);
  };