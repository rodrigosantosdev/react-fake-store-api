import "./products.css";
import { useState, useEffect } from "react";
import api from "../service/api";

type productProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export const Products = () => {
  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="product-container">
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2 className="title">{product.title}</h2>
              <div className="product-footer">
                <span className="price">R$ {product.price}</span>
                <span className="category">{product.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
