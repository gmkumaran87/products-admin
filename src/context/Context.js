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
      dispatch({ type: "ADD_ITEMS", payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (obj) => {
    const saveMenu = async (obj) => {
      try {
        const result = await axios.post(URL, obj);
        if (result.status === 201) loadItems();
      } catch (error) {
        console.log(error);
      }
    };
    saveMenu(obj);
  };

  const editItem = (obj, id) => {
    const newUrl = `${URL}/${id}`;
    const editMenu = async () => {
      try {
        const res = await axios.put(newUrl, obj);
        if (res.status === 200) {
          loadItems();
        }
      } catch (error) {
        console.log(error);
      }
    };

    editMenu();
  };

  const deleteItem = (id) => {
    const newUrl = `${URL}/${id}`;
    const deleteMenu = async () => {
      try {
        const res = await axios.delete(newUrl);
        if (res.status === 200) {
          console.log("Inside IF condition");
          loadItems();
        }
      } catch (error) {
        console.log(error);
      }
    };

    deleteMenu();
  };

  // Load intial values
  useEffect(() => {
    let controller = new AbortController();
    loadItems();
    return () => {
      console.log("Cleaning up");
      controller?.abort();
    };
  }, []);

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
