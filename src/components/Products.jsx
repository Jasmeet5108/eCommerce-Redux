import React, { useEffect, useState } from 'react'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {
      let data = await fetch("https://fakestoreapi.com/products");
      let parsedData = await data.json();
      setProducts(parsedData);
    }
    fetchProducts();
  }, [])

  return (
    <section id='Products' className='max-w-screen-xl mx-auto px-4 mt-4'>
      <h2 className='my-8 text-2xl font-semibold underline underline-offset-4'>Products</h2>
      <div className='flex flex-wrap gap-9 justify-center'>
        {
          products.map((product, index) => (
            <div className='flex flex-col items-center border border-black rounded-xl p-2 w-[370px]' key={index}>
              <li className='list-none font-semibold text-lg mt-2 text-center'>{product.title}</li>
              <img className='my-4' src={product.image} alt="Image" width={150} />
              <li className='list-none text-center mt-2'>{product.description}</li>
              <li className='list-none my-2 font-semibold text-xl'>Price: ${product.price}</li>
              <div>
                <button className='my-2 py-2 px-3 font-semibold bg-sky-500 text-white rounded-lg flex justify-center items-center gap-2' type='button'>
                  <p>Add to Cart</p>
                  <img src="/cart.svg" alt="cart" width={20} />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Products