import React from 'react'
import { useParams } from 'react-router-dom'


function Product(product) {
 
  const param = useParams();
  return (
    // <div>Product id: {param.id}</div>
    <>
      <h1>Product : {product.name}  </h1>  
    </>
    
  )
}

export default Product