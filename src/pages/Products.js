import React from "react";
import Title from "../wrappers/Title";
import { useGlobalContext } from "../context/Context";
import Card from "../components/Card";
import "./Product.css";

const Products = () => {
  const { items } = useGlobalContext();

  const data = items.map((el) => {
    return (
      <Card
        key={el.id}
        itemName={el.itemName}
        price={el.price}
        stock={el.stock}
        itemDesc={el.itemDesc}
        itemUrl={el.itemUrl}
        id={el.id}
      />
    );
  });
  return (
    <>
      <Title title="Our Products" />
      <div className="products-center">{data}</div>
    </>
  );
};

export default Products;
