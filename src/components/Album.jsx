import React from 'react'

const Album = () => {
    return (
        <div className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
            <div className='font-semibold text-lg py-4'>
                Ablums
            </div>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <img src='https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg' className='w-40 h-auto rounded-md object-contain' alt='jewellery' />
                    <div className="mt-2 text-xl font-light">
                        Braceletes
                    </div>
                </div>
                <div className=''>
                    <img src='https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg' className='w-40 rounded-md h-auto object-contain' alt='jewellery' />
                    <div className="mt-2 text-xl font-light">
                        Braceletes
                    </div>
                </div>
                <div className=''>
                    <img src='https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg' className='w-40 rounded-md h-auto object-contain' alt='jewellery' />
                    <div className="mt-2 text-xl font-light">
                        Braceletes
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album;
