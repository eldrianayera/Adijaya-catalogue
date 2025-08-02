import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

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
      const res = await fetch(`${API_BASE_URL}/products`);

      const data = await res.json();

      setProducts(data);

      const categorySet = new Set(data.map((p) => p.category));

      setCategory(["All", ...categorySet]);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setLoading(false);
    }
  };

  const fetchProductsById = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/id/${id}`);
      const data = await res.json();
      setProductById(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products by id:", err);
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/category/${category}`);
      const data = await res.json();
      setProducts(data);
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
