import CategoryComponent from '@/components/CategoryComponent'
import SearchBar from '@/components/SearchBar'
import ButtonSmall from '@/components/button/ButtonSmall'
import CardProduct from '@/components/cards/CardProduct'
import CarouselComponent from '@/components/carousel/CarouselComponent'
import DefaultHeader from '@/components/header/DefaultHeader'
import LargeScreenHeader from '@/components/header/LargeScreenHeader'
import BagIcon from '@/components/icon/BagIcon'
import ChatIcon from '@/components/icon/ChatIcon'
import NavbarComponent from '@/components/navbar/NavbarComponent'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { getAllProduct } from './api/product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const products = await getAllProduct()
    console.log(products)
    setAllProduct(products)
  }

  const fetchDataDetails = async (id) => {
    const products = await getProductDetail(id)
    // console.log(products)
    setAllProduct(products)
  }

  return (
    <div className='bg-navy'>
      <div className='block lg:hidden'>
        <DefaultHeader />
      </div>
      <div className='hidden lg:block'>
        <LargeScreenHeader />
      </div>
      <div className='px-5 py-5 lg:px-44 rounded-t-3xl bg-white mt-2'>
        <div className='h-[1500px]'>
          <div className='flex gap-4 items-center mb-5 lg:hidden'>
            <SearchBar />
            <div className='flex items-center gap-3'>
              <ChatIcon color="#1F3C42" />
              <BagIcon color="#1F3C42" />
            </div>
          </div>
          <div className='mb-6'>
            <CarouselComponent />
          </div>
          <div className='mb-10'>
            <CategoryComponent />
          </div>
          <p className='font-semibold text-sm'>Produk terakhir dilihat</p>
          <div className='flex gap-1 lg:gap-2 overflow-x-scroll scrollbar-hide py-3 px-1 mb-8'>
            {allProduct.map((product, id) => {
              return (
                <CardProduct
                  key={id}
                  title={product.title}
                  price={product.price}
                  imageProduct={product.image}
                />
              )
            })}
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-sm'>Produk di sekitarmu!</p>
            <ButtonSmall href="/viewall" innerText="Lihat Semua" />
          </div>
          <div className='flex flex-wrap justify-center gap-x-2 gap-y-2'>
            {allProduct.map((product, id) => {
              return (
                <CardProduct
                  key={id}
                  title={product.title}
                  price={product.price}
                  imageProduct={product.image}
                // rating={product.rating.rate}
                />
              )
            })}
          </div>
        </div>
      </div>
      <NavbarComponent />
    </div>
  )
}
