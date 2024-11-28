import React from 'react';
import {
    FacebookIcon,
    ChevronRightIcon,
    InstagramIcon,
    TiktokIcon,
} from '@heroicons/react/20/solid';

const Header = () => {
    return (
        <div>
            <header className=' bg-gray-700 flex justify-between text-white py-2 px-4'>
                <div>
                    <a href="">
                        <img src="" alt="Zain Jewellers" className='' />
                    </a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex m-0 p-0 gap-2">
                        <li>
                            <a href="" className='p-2'>Rings</a>
                        </li>
                        <li>
                            <a href="" className='p-2'>Earings</a>
                        </li>
                        <li>
                            <a href="" className='p-2'>Necklaces</a>
                        </li>
                        <li>
                            <a href="" className='p-2'>Bracelets</a>
                        </li>
                        <li>
                            <a href="" className='p-2'>Nose Rings</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-lg lg:hidden'>Zain Jewellers</h1>
                </div>
                <div className='flex'>
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
            </header>
            <nav className='w-full lg:hidden'>
                <ul className='my-1'>
                    <li className='border-b text-xl font-light p-2 flex justify-between'>
                        <p>Rings</p>
                        <span>
                            <ChevronRightIcon className='w-6' />
                        </span>
                    </li>
                    <li className='border-b p-2 text-xl font-light flex justify-between'>
                        <p>Earings</p>
                        <span>
                            <ChevronRightIcon className='w-6' />
                        </span>
                    </li>
                    <li className='border-b  text-xl font-light p-2 flex justify-between'>
                        <p>Necklaces</p>
                        <span>
                            <ChevronRightIcon className='w-6' />
                        </span>
                    </li>
                    <li className='border-b p-2 text-xl font-light flex justify-between'>
                        <p>Bracelets</p>
                        <span>
                            <ChevronRightIcon className='w-6' />
                        </span>
                    </li>
                    <li className='border-b p-2 text-xl font-light flex justify-between'>
                        <p>Nose Rings</p>
                        <span>
                            <ChevronRightIcon className='w-6' />
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
