import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeHolder="Product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeHolder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label>Price (in USD)</label>
        <input
          type="number"
          placeHolder="Price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
