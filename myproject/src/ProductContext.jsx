import React,{useContext,useState,useEffect,createContext} from 'react'

const ProductContext = createContext()

function ProductContextAPI({children}) {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async () => {
        let response = await fetch("https://dummyjson.com/products")
        let data = await response.json()
        console.log(data);
        setProducts(data.products)
    }
  return (
    <ProductContextAPI.provider
    value={{products,setProducts}}>
        {children}
    </ProductContextAPI.provider>
  )
}

export const useProducts = () => useContext(ProductContext)
export default ProductContextAPI