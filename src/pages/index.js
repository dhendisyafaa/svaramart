import CarouselComponent from '@/components/CarouselComponent'
import CategoryComponent from '@/components/CategoryComponent'
import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import ButtonSmall from '@/components/button/ButtonSmall'
import CardProduct from '@/components/cards/CardProduct'
import BagIcon from '@/components/logo/BagIcon'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col gap-8 h-[1500px]'>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center '>
              <SearchBar />
              <BagIcon color="#1F3C42" />
            </div>
            <CarouselComponent />
          </div>
          <CategoryComponent />
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <p className='font-semibold text-sm'>Produk terakhir dilihat</p>
          </div>
          <div className='flex gap-2 pr-5 overflow-x-scroll scrollbar-hide py-3 rounded-lg'>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-sm'>Produk di sekitarmu!</p>
            <ButtonSmall innerText="Lihat Semua"/>
          </div>
          <div className='flex gap-2 pr-5 overflow-x-scroll scrollbar-hide py-3 rounded-lg'>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
    </Layout>
  )
}
