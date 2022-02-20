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

// CRUD FOR CART
export const getCart = () => instance.get(`/cart`); // Получить корзину
export const deleteCart = () => instance.delete(`/cart`); // Удалить всю корзину
export const addNewCart = (data) => instance.post(`/cart`, data); // Создать корзину
export const updatedCart = (data) => instance.put(`/cart`, data); // Обновить товары корзине
export const addProductToCart = (productId) =>
  instance.put(`/cart/${productId}`); // Добавить товар в корзину
export const deleteProducFromCart = (productId) =>
  instance.delete(`/cart/product/${productId}`); // Удалить товар из корзины


// CRUD FOR WISHLIST
export const addNewWishlist = (newWishlist) => instance.post(`/wishlist`, newWishlist); // Создать список желаний
export const updatedWishlist = (updatedWishlist) => instance.put(`/wishlist`, updatedWishlist); // Обновить список желаний
export const addProductToWishlist = (productId) => instance.put(`/wishlist/${productId}`); // Добавить товар в список желаний
export const deleteProducFromWishlist = (productId) =>instance.delete(`/wishlist/${productId}`); // Удалить товар из спискa желаний
export const getWishlist = () => instance.get(`/wishlist`); // Получить список желаний
export const deleteWishlist = () => instance.delete(`/wishlist`); // Удалить список желаний

// Если нужно посмореть примеры запросов и обьектов, вот ссылка на документацию
// https://saribeg.github.io/DAN.IT-API-Documentation/#about-project

