
import { products as initilProducts} from "./mocks/products.json";
import { Productos } from "./components/Productos.jsx";
import { Header } from "./components/Header";
import { useContext, useState } from "react";
import { FiltersContext } from "./context/filters";

function useFilters(){
  const {filters,setfilters}=useContext(FiltersContext)
  const filterProducts=(products)=>{
    return products.filter(product=>{
      return (
        product.price >= filters.minPrice &&
        (
          filters.category == 'all' ||
          product.category == filters.category
        )
      )
    })
  }
  return {filterProducts, setfilters}
}

function App() {
  const [products]=useState(initilProducts);
  const {filterProducts, setfilters}=useFilters()
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header  changeFilters={setfilters}/>
      <Productos products={filteredProducts} />
    </>
  )
}

export default App
