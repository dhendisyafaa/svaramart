import Layout from '@/components/Layout'
import CardProduct from '@/components/cards/CardProduct'
import SimpleHeader from '@/components/header/SimpleHeader'
import NavbarComponent from '@/components/navbar/NavbarComponent'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react'

const wishlist = () => {
    return (
        <>
            <SimpleHeader titleHeader='Wishlist' />
            <div className=''>
                <Tab.Group>
                    <Tab.List className='p-5 gap-5 flex'>
                        <Tab className={({ selected }) =>
                            classNames(
                                '',
                                selected
                                    ? 'border-b-navy border-b-2 font-medium outline-transparent'
                                    : 'text-grey'
                            )
                        }>
                            <p>Semua</p>
                        </Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                '',
                                selected
                                    ? 'border-b-navy border-b-2 font-medium outline-transparent'
                                    : 'text-grey'
                            )
                        }>
                            <p>Album</p>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='px-5'>

                                <div className='grid grid-cols-2 justify-center gap-x-2 gap-y-2'>
                                    <CardProduct
                                    //     styleName='max-w-44'
                                    //     key={id}
                                    //     title={product.title}
                                    //     price={product.price}
                                    //     imageProduct={product.image}
                                    // // rating={product.rating.rate}
                                    />
                                    <CardProduct
                                    //     styleName='max-w-44'
                                    //     key={id}
                                    //     title={product.title}
                                    //     price={product.price}
                                    //     imageProduct={product.image}
                                    // // rating={product.rating.rate}
                                    />
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='h-[70vh] flex justify-center items-center'>
                                <p>COMMING SOON!</p>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <NavbarComponent />
        </>
    )
}

export default wishlist