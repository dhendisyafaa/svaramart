import BadgeTitle from '@/components/BadgeTitle'
import CouponComponent from '@/components/CouponComponent'
import VoucherComponent from '@/components/VoucherComponent'
import CardPromo from '@/components/cards/CardPromo'
import CarouselFull from '@/components/carousel/CarouselFull'
import SimpleHeader from '@/components/header/SimpleHeader'
import NavbarComponent from '@/components/navbar/NavbarComponent'

const promo = () => {
  return (
    <div className='h-[2000px]'>
      <SimpleHeader titleHeader="Promo" />
      <CarouselFull />
      <div className='mt-6'>
        <BadgeTitle />
        <div className='mx-5 flex gap-1 lg:gap-2 mt-5 overflow-x-scroll scrollbar-hide py-3'>
          <CardPromo />
          <CardPromo />
          <CardPromo />
          <CardPromo />
        </div>
        <div className='px-5 text-navy font-bold text-md mt-8 mb-4'>
          <p className='uppercase'>Kupon dari toko</p>
        </div>
        <div className='mx-5 flex gap-2 mt-5 overflow-x-scroll scrollbar-hide py-3'>
          <CouponComponent />
          <CouponComponent />
          <CouponComponent />
          <CouponComponent />
        </div>
        <div className='px-5 text-navy font-bold text-md mt-8 mb-4'>
          <p className='uppercase'>Voucher Gratis Ongkir Mingguan</p>
        </div>
        <div className='px-5 grid lg:grid-cols-3 gap-2 gap-x-2 lg:container lg:mx-auto'>
          <VoucherComponent />
          <VoucherComponent />
          <VoucherComponent />
          <VoucherComponent />
        </div>
        <div className='mt-12'>
          <BadgeTitle />
          <div className='mx-5 flex gap-1 lg:gap-2 mt-5 overflow-x-scroll scrollbar-hide py-3'>
          <CardPromo />
          <CardPromo />
          <CardPromo />
          <CardPromo />
        </div>
        </div>
      </div>
      <NavbarComponent />
    </div>
  )
}

export default promo