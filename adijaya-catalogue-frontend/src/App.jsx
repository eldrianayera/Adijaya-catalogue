import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PublicPage from "./pages/PublicPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PublicPage />} />
          <Route path="/admin/products" element={<AdminPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
