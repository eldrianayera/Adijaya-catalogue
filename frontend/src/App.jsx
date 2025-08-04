import { useAdmin } from "./hooks/useAdmin";
import AdminLogin from "./pages/AdminLogin";
import ProductDetailPage from "./pages/ProductDetailPage";
import PublicPage from "./pages/PublicPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";

export default function App() {
  const { handleLogOut, isValidAdmin } = useAdmin();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          <Route path="/search/:search" element={<SearchResultsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
