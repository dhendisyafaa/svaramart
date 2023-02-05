import { useRouter } from 'next/router';
import React from 'react'
import {BerandaIcon, ChatIcon, OrderIcon, PromoIcon } from './NavbarIcon';

const NavbarComponent = () => {
  const router = useRouter();

  return (
    <div className="navbar grid grid-cols-4 fixed bottom-0 items-center w-full py-2.5 rounded-t-xl bg-white shadow-[0_30px_30px_20px_rgba(0,0,0,1)] z-30">
      <BerandaIcon navbarName={'Beranda'} href={'/'} selected={router.pathname === '/' ? true : false} />
      <PromoIcon navbarName={'Promo'} href={'/promo'} selected={router.pathname === '/promo' ? true : false} />
      <OrderIcon navbarName={'Order'} href={'/order'} selected={router.pathname === '/order' ? true : false} />
      <ChatIcon navbarName={'Chat'} href={'/chat'}  selected={router.pathname === '/chat' ? true : false} />
    </div>
  )
}

export default NavbarComponent