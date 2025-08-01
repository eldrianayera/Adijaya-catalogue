import AdminPage from "./pages/AdminPage";
import VisitorPage from "./pages/VisitorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<VisitorPage />} />
          <Route path="/admin/products" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
