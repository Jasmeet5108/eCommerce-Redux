import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart as removeFromCartAction  } from '../redux/slices/cartSlice';


const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart)

  const removeFromCart = (itemId) => {
    dispatch(removeFromCartAction(itemId))
  }


  return (
    <>
  {cartItems.length === 0 && <div className='font-bold text-2xl text-center mt-10'>Cart is empty!!</div>}

      <div className='flex flex-wrap gap-9 justify-center mt-10'>
        {
          cartItems.map((item, index) => (
            <div key={index}>
              <div className='flex flex-col items-center border border-black rounded-xl p-2 w-[320px] lg:w-96 h-auto' >
                <p className='font-semibold text-lg mt-2 text-center'>{item.title}</p>
                <img src={item.image} alt="Image" width={150} height={200} className='my-2' />
                <p className='mt-2 line-clamp-3 min-w-full'>{item.description}</p>
                <p className='my-2 font-semibold text-xl'>Price: ${item.price}</p>
                <div>
                  <button onClick={() => removeFromCart(item.id)} className='my-2 py-2 px-3 font-semibold bg-sky-500 text-white rounded-lg flex justify-center items-center gap-2' type='button'>
                    <p>Remove from Cart</p>
                    <img src="/cart.svg" alt="cart" width={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default Cart