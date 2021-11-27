import instance from "./instance";

export const createCategory = (category) => {
    const url = "/categories";
    return instance.post(url, category);
  };
  export const listCategory = () => {
    const url = "/categories";
    return instance.get(url);
  };
  export const readCategory = (id) => {
    const url = "/categories/" + id;
    return instance.get(url);
  };
  export const removeCategory = (id) => {
    const url = "/categories/" + id;
    return instance.delete(url);
  };
  export const updateCategory = (category) => {
    const url = "/categories/" + category.id;
    return instance.patch(url, category);
  };