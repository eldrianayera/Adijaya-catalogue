import AdminProducts from "./pages/AdminProducts";
import VisitorProducts from "./pages/VisitorProducts";

export default function App() {
  const isAdmin = true;

  return <div>{isAdmin ? <AdminProducts /> : <VisitorProducts />}</div>;
}
