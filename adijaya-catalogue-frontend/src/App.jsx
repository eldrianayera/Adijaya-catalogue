import AdminLogin from "./pages/AdminLogin";
import AdminProducts from "./pages/AdminProducts";
import VisitorProducts from "./pages/VisitorProducts";

export default function App() {
  const isAdmin = true;

  return <div>{isAdmin ? <AdminLogin /> : <VisitorProducts />}</div>;
}
