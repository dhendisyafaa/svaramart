import CategoryComponent from '@/components/CategoryComponent'
import CouponComponent from '@/components/CouponComponent'
import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import ButtonSmall from '@/components/button/ButtonSmall'
import CardProduct from '@/components/cards/CardProduct'
import CarouselComponent from '@/components/carousel/CarouselComponent'
import BagIcon from '@/components/icon/BagIcon'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='h-[1500px]'>
        <div className='flex gap-2 items-center mb-5'>
          <SearchBar />
          <BagIcon color="#1F3C42" />
        </div>
        <div className='mb-6'>
          <CarouselComponent />
        </div>
        <div className='mb-10'>
          <CategoryComponent />
        </div>
        <p className='font-semibold text-sm'>Produk terakhir dilihat</p>
        <div className='flex gap-1 lg:gap-2 overflow-x-scroll scrollbar-hide py-3 mb-8'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-semibold text-sm'>Produk di sekitarmu!</p>
          <ButtonSmall innerText="Lihat Semua" />
        </div>
        <div className='flex gap-1 lg:gap-2 overflow-x-scroll scrollbar-hide py-3'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </Layout>
  )
}
