import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(["All"]);
  const [productById, setProductById] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get(`/products`);
      setProducts(res.data);

      const categorySet = new Set(res.data.map((p) => p.category));

      setCategory(["All", ...categorySet]);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setLoading(false);
    }
  };

  const fetchProductsById = async (id) => {
    try {
      const res = await axiosInstance.get(`/products/id/${id}`);
      setProductById(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products by id:", err);
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const res = await axiosInstance.get(`/products/category/${category}`);

      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products by category:", err);
      setLoading(false);
    }
  };

  return [
    products,
    setProducts,
    loading,
    fetchProducts,
    fetchProductsByCategory,
    category,
    setCategory,
    fetchProductsById,
    productById,
    setProductById,
  ];
};
