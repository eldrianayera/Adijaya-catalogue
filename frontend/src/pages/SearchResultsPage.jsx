import { useParams } from "react-router-dom";
import CardContainer from "../components/shared-components/CardContainer";
import { useEffect } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useAdmin } from "../hooks/useAdmin";
import Header from "../components/shared-components/Header";

export default function SearchResultsPage() {
  const {
    products,
    setProducts,
    handleAdd,
    handleDelete,
    handleEdit,
    isValidAdmin,
    handleLogOut,
  } = useAdmin();
  const { search } = useParams();

  useEffect(() => {
    if (!search) return;

    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get(`/products/search/${search}`);
        setProducts(res.data);
      } catch (err) {
        console.error(
          "Failed to search product:",
          err.response?.data || err.message
        );
      }
    };

    fetchProducts();
  }, [products]);

  return (
    <div className="page">
      <Header admin={isValidAdmin} handleLogOut={handleLogOut} />
      <div className="px-[20%] m-10">
        <div className="text-xl">Results :</div>
        <div className="text-3xl font-bold">
          "{search}" ({products.length})
        </div>
      </div>
      <CardContainer
        products={products}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        isValidAdmin={isValidAdmin}
      />
    </div>
  );
}
