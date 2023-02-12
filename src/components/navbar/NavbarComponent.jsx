import { useRouter } from 'next/router';
import { BerandaIcon, OrderIcon, PromoIcon, WishlistIcon } from './NavbarIcon';
import { motion } from 'framer-motion';

const NavbarComponent = () => {
  const router = useRouter();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 1,
      }} className="navbar grid grid-cols-4 fixed bottom-0 items-center w-full py-2.5 rounded-t-xl bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,1)] z-30">
      <BerandaIcon navbarName={'Beranda'} href={'/'} selected={router.pathname === '/' ? true : false} />
      <PromoIcon navbarName={'Promo'} href={'/promo'} selected={router.pathname === '/promo' ? true : false} />
      <WishlistIcon navbarName={'Wishlist'} href={'/wishlist'} selected={router.pathname === '/wishlist' ? true : false} />
      <OrderIcon navbarName={'Order'} href={'/order'} selected={router.pathname === '/order' ? true : false} />
    </motion.div>
  )
}

export default NavbarComponent