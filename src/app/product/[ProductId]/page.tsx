//@ts-nocheck
"use client"
import getProduct from '@/action/get-product'
import ProductDetails from '@/components/product-card'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const params=useParams();
  console.log(params.ProductId);
  
  const id=params.ProductId;
  console.log(id);
  
  const [product, setProduct] = useState(null);
  console.log(product);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(id);
        console.log(productData);
        
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);




  return (
    
   <ProductDetails product={product} />
  )
}

export default Product
