import reducer from "./reducer";
import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

// Creating the Context
const MenuContext = React.createContext();

const initialState = {
  isLoading: false,
  items: [],
};

const URL = "https://614eabf5b4f6d30017b482ac.mockapi.io/Products";

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadItems = async () => {
    console.log("Getting the Items from DB");
    try {
      const result = await axios.get(URL);
      console.log(result);
      dispatch({ type: "ADD_ITEMS", payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (obj) => {
    const saveMenu = async (obj) => {
      try {
        const result = await axios.post(URL, obj);
        console.log(typeof result.status);
        if (result.status === 201) loadItems();
      } catch (error) {
        console.log(error);
      }
    };

    console.log("Context Additem", obj);
    saveMenu(obj);
  };

  const editItem = (id) => {
    const editMenu = async (id) => {
      try {
        const res = await axios.put(`URL/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(id);
    editMenu(id);
  };

  const deleteItem = (id) => {
    const newUrl = `${URL}/${id}`;
    const deleteMenu = async () => {
      try {
        const res = await axios.delete(newUrl);
        console.log(res);
        if (res.status === "OK") loadItems();
      } catch (error) {
        console.log(error);
      }
    };

    deleteMenu();
  };

  // Load intial values
  useEffect(() => {
    console.log("Calling UseEffect");
    loadItems();
  }, []);

  /* useEffect(() => {
    console.log("Calling Updated UseEffect");
    dispatch({ type: "ADD_ITEMS", payload: state.items });
  }, [state.items]);*/

  return (
    <MenuContext.Provider value={{ ...state, addItem, deleteItem, editItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MenuContext);
};

export { Context, MenuContext };
