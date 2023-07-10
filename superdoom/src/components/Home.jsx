import React from 'react'
import Product from './Product';

function Home() {

    const products = [1,2,3,4,5];
  return (
    <div>Home


        {
           products.map((pro) => (
            <Product name={pro} key={pro}/>
           ))
        };
    </div>
  )
}

export default Home