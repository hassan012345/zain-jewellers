import React from 'react';
import {
    PhoneIcon,
} from '@heroicons/react/20/solid'

const Footer = () => {

    const products = ['Rings', 'Earings', 'Necklaces', 'Bracelets', 'Nose Rings']

    return (
        <div className='text-white bg-gray-700 p-6 lg:p-10  flex flex-col lg:grid grid-cols-3 lg:grid-cols-4  gap-y-4 lg:gap-6'>
            <div>
                <h1 className='text-lg lg:text-2xl'>Zain Jewellers</h1>
                <p className='text-sm lg:text-lg text-slate-400'>We deal in all types of pure Gold and
                    Artificial jewellery. We have a wide range of products to choose from. We also provide
                    custom made jewellery.
                </p>
            </div>
            <div>
                <h1 className='text-lg lg:text-2xl'>Contact Us</h1>
                <div className="flex items-center">
                    <PhoneIcon className='h-2' />
                    <p className='ml-2 text-sm lg:text-lg text-slate-400'>+92-345-6789-123</p>
                </div>
            </div>
            <div>
                <h1 className='text-lg lg:text-2xl'>Products</h1>
                {
                    products.map((product) => (
                        <p className='text-sm lg:text-lg text-slate-400'>{product}</p>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className='text-sm lg:text-lg text-slate-400'>Follow Us</p>
                <div className="gap-4 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='w-8 h-8'>
                        <img src="https://img.icons8.com/fluency/36/000000/facebook-new.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/36/000000/instagram-new.png" alt="instagram" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/36/000000/tiktok.png" alt="tiktok" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
