'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {

  return (
    <div>



<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-24 h-24">
        <Image src='/logo.png' width={300} height={300} alt='Logo' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Utopia  </span>
        </a>
        <Link href='http://127.0.0.1:8000/admin/login/?next=/admin/' className=' text-white hover:underline' >
              
                
              Login
           
          </Link> 
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:+251988153630" className="text-sm  text-gray-500 dark:text-white hover:underline">+251988153630</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-[#a87a58]">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-center  ">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse border-b-8 text-xl    ">
                <li>
                <Link href='/pages/about' className=' text-black hover:underline' >
              
                
              About
           
          </Link>                </li>
                <li>
                <Link href='/pages/registration' className=' text-black hover:underline' >
                Register
            </Link>                </li>
                <li>
                <Link  href='https://t.me/Leul_tefera' className=' text-black hover:underline' >
              Contact
          </Link>                </li>
               
            </ul>
        </div>
    </div>
</nav>


    </div>
  );
}
