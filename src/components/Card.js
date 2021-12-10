import React from "react";
import "./Card.css";
import { useGlobalContext } from "../context/Context";

const Card = (props) => {
  const { deleteItem, editItem } = useGlobalContext();

  const { itemName, price, stock, itemDesc, itemUrl, id } = props;

  const handleClick = (e, id) => {
    console.log(e.target.dataset.type, id);

    if (e.target.dataset.type === "edit") {
      editItem(id);
    } else {
      deleteItem(id);
    }
  };

  return (
    <article className="card">
      <img src={itemUrl} className="image" alt={itemName} />
      <div className="item-desc">
        <div className="item-title">
          <h4>{itemName}</h4>
          <span className="item-price">{price}</span>
        </div>
        <div className="item-para">
          <p>{itemDesc}</p>
        </div>
        <div className="action-btns">
          <button
            className="edit-btn"
            data-type="edit"
            onClick={(e) => {
              handleClick(e, id);
            }}
          >
            Edit
          </button>
          <button
            className="dlt-btn"
            data-type="delete"
            onClick={(e) => {
              handleClick(e, id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
