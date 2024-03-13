import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <Layout>
      <h1>New Product</h1>
      <label>Product name</label>
      <input
        type="text"
        placeHolder="Product name"
        value={title}
        onChange={(ev) => ev.target.value}
      ></input>
      <label>Description</label>
      <textarea placeHolder="description"></textarea>
      <label>Price (in USD)</label>
      <input type="number" placeHolder="Price"></input>
      <button className="btn-primary">Save</button>
    </Layout>
  );
}
