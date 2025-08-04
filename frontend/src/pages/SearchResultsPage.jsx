import { useParams } from "react-router-dom";
import CardContainer from "../components/shared-components/CardContainer";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useAdmin } from "../hooks/useAdmin";

export default function SearchResultsPage() {
  const {
    products,
    setProducts,
    handleAdd,
    handleDelete,
    handleEdit,
    isValidAdmin,
  } = useAdmin();
  const { search } = useParams();

  useEffect(() => {
    if (!search) return;

    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get(`/products/search/${search}`);
        setProducts(res.data);
        console.log("ok");
        console.log(res.data);
      } catch (err) {
        console.error(
          "Failed to search product:",
          err.response?.data || err.message
        );
      }
    };

    fetchProducts();
  }, [search, setProducts]);

  return (
    <CardContainer
      products={products}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      isValidAdmin={isValidAdmin}
    />
  );
}
