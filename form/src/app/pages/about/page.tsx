import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <div className=' w-screen h-screen  flex'> 
        <div className=' w-full h-full  flex  lg:flex-row flex-col justify-center  '>
            <div className=' flex items-center justify-center flex-1'>
                <div className=' lg:w-4/5 lg:h-4/5 flex items-center justify-center border   '>
                    <div className=' lg:w-full lg:h-full bg-black  border rounded-xl items-center justify-center'>
                        <p className='lg:w-full flex pt-12 underline text-5xl text-[#ac6833] justify-center items-center '> About Us </p>
                        <p className='lg:w-full flex text-[#ac6833] justify-center items-center text-2xl pt-12'>  Welcome to Lala Soft tech</p>
                        <p className='lg:w-full flex text-[#ac6833] justify-center items-center pt-12 text-center'>
                       

At [Lala Soft tech], we are architects of innovation, crafting bespoke software solutions that redefine industry standards. Our journey is marked by a commitment to excellence, a passion for technology, and an unwavering dedication to our clients.

Who We Are:
As a leading force in software development, we stand at the intersection of creativity and technology. Our mission is to empower businesses through tailor-made solutions, backed by a vision to be global pioneers in transformative technology.

Core Values:
Integrity, innovation, collaboration, and client-centricity form the bedrock of our ethos. We believe in the power of technology to revolutionize, and our values guide us as we strive for excellence in every endeavor.                        </p>
<div className='flex justify-center items-center  sm:pt-24'> <Link className=' active:text-[#ac6833] active:bg-black  justify-center items-center bg-black  border rounded-2xl hover:text-black w-1/3 text-white hover:bg-[#ac6833]' href='/pages/registration'>  <button className=' w-full h-12'>Regster</button>  </Link></div>

                    </div>
                   
                </div>


            </div>
            <div className='flex items-center justify-center flex-1 '>
                <div className=' flex items-center justify-center '>
                    <Image src='/logo.png' alt='Logo ' width={700} height={700}/>
                </div>


            </div>
        </div>
    </div>
  )
}
