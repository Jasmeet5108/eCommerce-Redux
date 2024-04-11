import React from 'react'

const Products = (props) => {
    const { product, title, img, desc, price, addToCartFunc } = props;
    return (
        <>
            <div className='flex flex-col items-center border border-black rounded-xl py-2 px-3 w-[320px] lg:w-96 h-auto' >
                <p className='font-semibold text-lg mt-2 text-center'>{title}</p>
                <img src={img} alt="Image" width={150} height={200} className='my-2' loading='lazy'/>
                <p className='mt-2 line-clamp-3 min-w-full'>{desc}</p>
                <p className='my-2 font-semibold text-xl'>Price: ${price}</p>
                <div>
                    <button onClick={() => addToCartFunc(product)} className='my-2 py-2 px-3 font-semibold bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex justify-center items-center gap-2' type='button'>
                        <p>Add to Cart</p>
                        <img src="/cart.svg" alt="cart" width={20} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Products