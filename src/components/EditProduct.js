import React from "react";
import { useGlobalContext } from "../context/Context";
import { useParams, Outlet } from "react-router-dom";

const EditProduct = (props) => {
  const params = useParams();

  const productId = params.productId;

  return (
    <>
      <Outlet> </Outlet>
    </>
  );
};

export default EditProduct;
