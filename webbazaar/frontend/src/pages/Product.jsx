import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }

    })
  }
  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex flex-1 sm:gap-12 flex-col sm:flex-row">
        <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {
              productData.image.map((item, index) => (
                <img src={item} onClick={() => setImage(item)} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        <div className=" flex-1">
          <h1 className=' font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className=' mt-5 text-3xl font-medium'> {currency} {productData.price} </p>
          <p className=' mt-5 text-gray-500 md:w-3/4'> {productData.description} </p>

          <div className=" flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 cursor-pointer bg-gray-100  ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700 w-40">ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className=" text-sm text-gray-500 mt-5 flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delevery is availabl on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is on online platform that facilitates the bysing and selling of products or services over the internet. It serves as a vitual marketplace where businesses and individaul can showcase their products, interact with costomers, and conduct transations without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer  </p>
          <p>E-commmerce websites typically display products or services along with detailed descriptions, images,price and any available varitions. Each product usually has its own dedicated page with relvant information</p>
        </div>
      </div>
      {/* related products  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) :
    <div className="opacity-0"></div>
}

export default Product