import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function editProductPage() {
  const router = useRouter();
  const id = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      console.log(response.data);
    });
  }, [id]);

  return <Layout>Edit product form here</Layout>;
}
