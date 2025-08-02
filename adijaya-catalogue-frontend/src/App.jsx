import Header from "./components/shared-components/Header";
import { useAdmin } from "./hooks/useAdmin";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PublicPage from "./pages/PublicPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const { handleLogOut, isValidAdmin } = useAdmin();
  return (
    <>
      <BrowserRouter>
        <Header admin={isValidAdmin} handleLogOut={handleLogOut} />

        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="/admin/login" element={<AdminPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
