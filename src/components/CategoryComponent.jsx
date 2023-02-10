import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import laptop from '../../public/images/icon/laptop.svg'
import medicine from '../../public/images/icon/medicine.svg'
import makeUp from '../../public/images/icon/make-up.svg'
import bodyCare from '../../public/images/icon/body-care.svg'
import petCare from '../../public/images/icon/pet-care.svg'
import iconCategory from '../../public/images/icon/logo promo.png'

const CategoryComponent = () => {
    return (
        <div className='grid grid-cols-5 items-baseline text-center'>
            <Link href='/' className={`items-center flex flex-col gap-1`}>
                <Image
                    // src={laptop}
                    src={iconCategory}
                    
                />
                <p className='text-[10px]'>
                    Elektronik
                </p>
            </Link>
            <Link href='/' className={`items-center flex flex-col gap-1`}>
                <Image
                    // src={bodyCare}
                    src={iconCategory}
                />
                <p className='text-[10px]'>
                    Perawatan Tubuh
                </p>
            </Link>
            <Link href='/' className={`items-center flex flex-col gap-1`}>
                <Image
                    // src={makeUp}
                    src={iconCategory}
                />
                <p className='text-[10px]'>
                    Kecantikan
                </p>
            </Link>
            <Link href='/' className={`items-center flex flex-col gap-1`}>
                <Image
                    // src={petCare}
                    src={iconCategory}
                />
                <p className='text-[10px]'>
                    Perawatan Hewan
                </p>
            </Link>
            <Link href='/' className={`items-center flex flex-col gap-1`}>
                <Image
                    // src={medicine}
                    src={iconCategory}
                />
                <p className='text-[10px]'>
                    Kesehatan
                </p>
            </Link>
        </div>
    )
}

export default CategoryComponent