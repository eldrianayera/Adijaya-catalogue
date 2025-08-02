import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { isValidAdmin } = useAdmin();

  useEffect(() => {
    console.log("Admin validation status:", isValidAdmin);
  }, [isValidAdmin]);

  return <div>Product Detail</div>;
}
