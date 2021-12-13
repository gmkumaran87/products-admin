import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import EditProduct from "./components/EditProduct";
import Main from "./wrappers/Main";

function App() {
  return (
    <Router>
      <Navigation />
      <Main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add-product/" element={<AddProducts />} />
          <Route path="*" element={<Products />} />
          <Route path="/edit-product/:productId" element={<EditProduct />}>
            <Route path="" element={<AddProducts />} />
          </Route>
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
