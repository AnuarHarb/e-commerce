import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Card } from "./card";
import { Header } from "./header";

const Container = styled.section`
  .list {
    display: flex;
    gap: 12px;
    width: 100%;
    flex-wrap: wrap;
  }

  .wrapper {
    padding: 45px;
  }
`;

export const Layout = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      const resp = await response.json();
      console.log(resp);
      setProduct(resp.products);
    };

    getProducts();
  }, []);

  return (
    <Container>
      <Header />
      <section className="wrapper">
        <h1>¡Este es mi primer componente!</h1>
        <div className="list">
          {products.map((product) => (
            <Card
              title={product.title}
              image={product.images[0]}
              price={product.price}
              subtitle={product.description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
