import React from 'react'
import { useProducts } from './ProductContext'

function Products() {
     const{Products} = useProducts()
  return (
    <>
        <h1>products</h1>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                Products.map(product => {
                    return(
                        <div>
                            <img src={product?.images} alt="" height={"200px"} width={"200px"}/>
                            <h1>{product.brand}</h1>
                            <h1>{product.title}</h1>
                            <h1>price :{product.price}</h1>
                            <div>
                                <button>ADD TO CART</button>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Products