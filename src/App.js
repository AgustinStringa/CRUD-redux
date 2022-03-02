import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route exact path="/products/new" element={<NewProduct />}></Route>
          <Route exact path="/products/edit/:id" element={<EditProduct />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
