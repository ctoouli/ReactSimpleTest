import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../hooks/HttpRequests.js'

function Home(){

  const url = `https://5f003a67dfd1400016ae17de.mockapi.io/products?page=1&limit=10`

  let products = useAxiosGet(url)

  let content = null

  if(products.error){
    content = <p>There is no good content found here :(</p>
  }

  if(products.loading){
    content = <Loader />
  }

  if(products.data) {
    content =
      products.data.map((product, key) =>
        <div key={key}>
          <ProductCard
            product={product}
          />
        </div>
      )
  }

  return(
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>

      {content}
    </div>
  )
}

export default Home
