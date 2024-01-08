import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className=" text-white py-10">
        
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 bg-gray-900">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; lala 2024. </p>
          <div className="order-1 md:order-2">
            <Link href='/pages/about'>
            <span className="px-2">About us</span></Link>
            <Link href='https://t.me/TD_lala' >
            <span className="px-2 border-l">Contact us</span>
            </Link> 
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
