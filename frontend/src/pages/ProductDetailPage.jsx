import { useAdmin } from "../hooks/useAdmin";
import CardContainer from "../components/shared-components/CardContainer";
import Header from "../components/shared-components/Header";
import SingleProductDetail from "../components/shared-components/SingleProductDetail";
import Footer from "../components/shared-components/Footer";

export default function ProductDetailPage() {
  const { isValidAdmin, handleLogOut, products } = useAdmin();

  return (
    <div className="page">
      <Header admin={isValidAdmin} handleLogOut={handleLogOut} />
      <SingleProductDetail />
      <CardContainer products={products} isValidAdmin={isValidAdmin} />
      <Footer />
    </div>
  );
}
