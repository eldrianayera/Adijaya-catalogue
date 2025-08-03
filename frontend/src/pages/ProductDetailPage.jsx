import { useAdmin } from "../hooks/useAdmin";
import CardContainer from "../components/shared-components/CardContainer";
import Header from "../components/shared-components/Header";
import SingleProductDetail from "../components/shared-components/SingleProductDetail";

export default function ProductDetailPage() {
  const { isValidAdmin, handleLogOut, products } = useAdmin();

  return (
    <div>
      <Header admin={isValidAdmin} handleLogOut={handleLogOut} />
      <SingleProductDetail />
      <div>
        {" "}
        <CardContainer products={products} isValidAdmin={isValidAdmin} />
      </div>
    </div>
  );
}
