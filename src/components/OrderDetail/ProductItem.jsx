import { Image } from 'antd';
import React from 'react'

const ProductItem = ({product}) => {
  console.log(product);
  return (
    <div>
      <Image src={product.image} width={80} />
      <span>
      {product.name}
      </span>
    </div>
  )
}

export default ProductItem