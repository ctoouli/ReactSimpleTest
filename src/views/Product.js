import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from '../hooks/HttpRequests.js'

function Product(){

  const { id } = useParams()
  const url = `https://5f003a67dfd1400016ae17de.mockapi.io/products/${id}`

  let product = useAxiosGet(url)

  let content = <div> nothingness </div>


  if(product.error){
    content = <p>There is no good content found here :(</p>
  }

  if(product.loading){
    content = <Loader />
  }

  if(product.data) {
    content =
      <div>
        <h1 className="text-2xl font-bold mb-3">
          {product.data.name}
        </h1>
        <div>
          <img
            src={product.data.images}
            alt={product.data.name}
          />
        </div>
        <div className="font-bold text-xl mb-3">
          $ {product.data.price}
        </div>
        <div>
          {product.data.description}
        </div>

      </div>
  }

  return(
    <div>
    {content}
    </div>
  )

}

export default Product
