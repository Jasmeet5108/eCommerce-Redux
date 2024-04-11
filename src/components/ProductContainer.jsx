import React, { useEffect } from 'react'
import { addToCart } from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { STATUS_ENUMS, fetchData } from '../redux/slices/productSlice';
import Loading from './Loading';
import Error from './Error';
import Products from './Products';


const ProductContainer = () => {

  const dispatch = useDispatch();
  const { products, status } = useSelector(state => state.product)
  const cartItems = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const addToCartFunc = (product) => {
    dispatch(addToCart(product))
  }


  return (
    <section id='Products' className='max-w-screen-xl mx-auto px-4 mt-4'>
      <div className='flex items-center justify-between'>
        <h2 className='my-8 text-2xl font-semibold underline underline-offset-4'>Products</h2>
        <div className='font-semibold text-2xl'>Items in cart - {cartItems.length}</div>
      </div>
      {status === STATUS_ENUMS.LOADING && <Loading />}
      {status === STATUS_ENUMS.ERROR && <Error />}
      <div className='flex flex-wrap gap-9 mt-4 justify-center'>
        {status === STATUS_ENUMS.IDLE &&
          products.map((product, index) => (
            <div key={index}>
              <Products product={product} title={product.title} img={product.image} desc={product.description} price={product.price} addToCartFunc={addToCartFunc} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductContainer