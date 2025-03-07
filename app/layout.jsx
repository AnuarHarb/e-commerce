import React from "react";
import { styled } from "styled-components";
import { Card } from "./card";

const Container = styled.section`
  .list {
    display: flex;
    gap: 12px;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Layout = () => {
  return (
    <Container>
      <h1>¡Este es mi primer componente!</h1>
      <div className="list">
        <Card
          title="Monitor"
          image="/monitor.jpg"
          price="100"
          subtitle="para computadora"
        />
        <Card
          title="juguete"
          image="/juguete.webp"
          price="100"
          subtitle="de Toy Story"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
        <Card
          title="patineta"
          image="/patineta.jpeg"
          price="100"
          subtitle="para patinar"
        />
      </div>
    </Container>
  );
};
