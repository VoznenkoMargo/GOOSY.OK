/* eslint-disable import/prefer-default-export */
import instance from "../api";

// CRUD FOR PRODUCTS
export const getProducts = () => instance.get(`/products`); // Получить все продукты
export const addNewProduct = (data) => instance.post(`/products`, data); // Добавить новый продукт
export const updatedProduct = (productId, data) =>
  instance.post(`/products/${productId}`, data); // Обновить продукт
export const searchProducts = (searchPhrases) =>
  instance.post(`/products/search`, searchPhrases); // Поиск продукта по фразе
export const getOneProduct = (itemNo) => instance.get(`/products/${itemNo}`); // Получить один продукт
export const getByCategory = (category) =>
  instance.get(`/products/filter${category}`); // Получить продукты по категории

// CRUD FOR WISHLIST
export const addNewWishlist = (newWishlist) =>
  instance.post(`/wishlist`, newWishlist); // Создать список желаний
export const updatedWishlist = (updatedUserWishlist) =>
  instance.put(`/wishlist`, updatedUserWishlist); // Обновить список желаний
export const addProductToWishlist = (productId) =>
  instance.put(`/wishlist/${productId}`); // Добавить товар в список желаний
export const deleteProducFromWishlist = (productId) =>
  instance.delete(`/wishlist/${productId}`); // Удалить товар из спискa желаний
export const getWishlist = () => instance.get(`/wishlist`); // Получить список желаний
export const deleteWishlist = () => instance.delete(`/wishlist`); // Удалить список желаний

export const sendRegData = (userData) => instance.post("/customers", userData);
export const sendLogInData = (loginData) =>
  instance.post("/customers/login", loginData);
export const getUserData = () => instance.get("/customers/customer");

// CRUD FOR COMMENTS
export const addNewComment = (newComment) =>
  instance.post("/comments", newComment);
export const getAllCommentOfProduct = (productId) =>
  instance.get(`/comments/product/${productId}`);
export const getAllComments = () => instance.get("/comments");
export const deleteOneComments = (id) => instance.delete(`/comments/${id}`);
export const updateComments = (id, updatedComment) =>
  instance.put(`/comments/${id}`, updatedComment);

// Если нужно посмореть примеры запросов и обьектов, вот ссылка на документацию
// https://saribeg.github.io/DAN.IT-API-Documentation/#about-project
