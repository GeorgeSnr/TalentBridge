import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Intro() {
    const links =[
        {
            href:"#",
            name:"Get Started",
        },
        {
            href:"#",
            name:"Book a Consultation"
        },
        {
            href:"#",
            name:"Start Now"
        },
    ]
  return  <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl bg-[#eaf6ff] rounded-lg px-4 py-8 my-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-4xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl dark:text-white">Job Search, Reinvented.</h1>
            <p className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">One fee. We{`'`}re with you until you land your next job — guaranteed.</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A personalized, done-for-you graduate job placement service — built to get you hired. We combine expert strategy, professional writing, resume distribution, networking, and dedicated hands-on coaching support to guide you every step of the way — until you{`'`}re placed in your new role.</p>
            {
                links.map((link,i)=>{
                   return <Link key={i} href={link.href} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                {link.name}
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link> 
                })
            }   
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <Image className='rounded-md' height={500} width={500}
 src="/grad.png" alt="mockup" />
        </div>                
    </div>
</section>
    </div>
}
