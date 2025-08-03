import Footer from "./components/shared-components/Footer";
import Header from "./components/shared-components/Header";
import { useAdmin } from "./hooks/useAdmin";
import AdminLogin from "./pages/AdminLogin";
import ProductDetailPage from "./pages/ProductDetailPage";
import PublicPage from "./pages/PublicPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const { handleLogOut, isValidAdmin } = useAdmin();
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}
