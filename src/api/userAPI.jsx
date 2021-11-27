import instance from "./instance";

export const createUser = (user) => {
    const url = "/users";
    return instance.post(url, user);
  };
  export const listUser = () => {
    const url = "/users";
    return instance.get(url);
  };
  export const readUser = (id) => {
    const url = "/users/" + id;
    return instance.get(url);
  };
  export const removeUser = (id) => {
    const url = "/users/remove/" + id;
    return instance.delete(url);
  };
  export const updateUser = (user) => {
    const url = "/users/" + user.id;
    return instance.put(url, user);
  };