import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./AddProducts.css";
import { useGlobalContext } from "../context/Context";
import { useNavigate, useParams } from "react-router";
import Title from "../wrappers/Title";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...props} {...field}></input>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea rows="4" cols="50" {...props} {...field}>
        Enter the text
      </textarea>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const AddProducts = (props) => {
  const { addItem, items, editItem } = useGlobalContext();

  const navigate = useNavigate();
  const productId = useParams().productId;

  let stateObj = {
    itemName: "",
    price: "",
    stock: "",
    itemUrl: "",
    itemDesc: "",
  };
  const initialState = {
    itemName: "",
    price: "",
    stock: "",
    itemUrl: "",
    itemDesc: "",
  };

  // If the Params are available then load the current user in the form
  if (productId) {
    const [product] = items.filter((el) => el.id === productId);
    // console.log("EDITED USER", editUser, users);
    stateObj = product;
  } else {
    stateObj = initialState;
  }

  return (
    <>
      <Title title="Add Product" />
      <Formik
        initialValues={stateObj}
        validationSchema={Yup.object({
          itemName: Yup.string()
            .max(35, "Must be 35 characters or less")
            .required("Required"),
          price: Yup.number().min(1).required("Please enter valid number"),
          stock: Yup.number()
            .min(1)
            .required("Please enter minimum stock value"),
          itemUrl: Yup.string().required("Please enter the image URL"),
          itemDesc: Yup.string().max(1200, "Maximum 1200 characters"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (productId) {
              editItem(values, productId);
            } else {
              addItem(values);
            }
            //addItem(values);
            setSubmitting(false);
          }, 400);
          resetForm({ values: "" });
          console.log("After updation/creation");
          navigate("/all-products/", { replace: true });
        }}
      >
        <Form className="menu-form">
          <MyTextInput
            label="Item Name"
            name="itemName"
            type="text"
            placeholder="Product Name"
          />
          <MyTextInput
            label="Price"
            name="price"
            type="number"
            placeholder="Enter Price"
          />
          <MyTextInput
            label="Stock"
            name="stock"
            type="number"
            placeholder="Enter Stock"
          />
          <MyTextInput
            label="Item Url"
            name="itemUrl"
            type="text"
            placeholder="Enter Item image Url"
          />
          <MyTextArea
            label="Item Description"
            name="itemDesc"
            placeholder="Enter Item description"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddProducts;
