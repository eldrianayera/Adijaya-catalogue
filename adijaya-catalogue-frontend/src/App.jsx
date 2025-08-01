import AdminLogin from "./pages/AdminLogin";
import AdminProducts from "./pages/AdminProducts";
import VisitorProducts from "./pages/VisitorProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<VisitorProducts />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
