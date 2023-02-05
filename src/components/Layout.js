import React from 'react'
import DefaultHeader from './header/DefaultHeader'
import NavbarComponent from './navbar/NavbarComponent'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <DefaultHeader />
      <Head>
        <title>Svara Mart</title>
        <meta name="description" content="Svara Mart | Online Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-5 py-5'>
        {children}
      </main>
      <NavbarComponent />
    </div>
  )
}

export default Layout