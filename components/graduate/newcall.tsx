import React from 'react'
import Image from 'next/image'

export default function Newcall() {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="flex max-w-screen-xl bg-[#eaf6ff] rounded-lg  py-8 my-8 mx-auto lg:gap-15 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <Image className='ml-8 rounded-md' height={500} width={600}
         src="/service.png" alt="mockup" />
                <div className="mx-40 place-self-end lg:col-span-7">
                    <p className="max-w-2xl mr-auto mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our graduate job placement service doesn’t just give you tools — it gives you a team.</p>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We take over the job search for you with expert strategists, writers, and job search specialists who work on your behalf until you land your next role. From identifying the right opportunities, expanding your network, to tailoring your resume and connecting with recruiters, we don’t stop until you're hired.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>  
                    <div className='flex space-x-8'>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-gray-100 border border-gray-300 rounded-full bg-[#4da9f7] hover:bg-blue-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg- dark:focus:ring-gray-800">
                        Schedule A call
                    </a> 
                    <a href="#" className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-50 border bg-[#0886f6] border-gray-300 rounded-full hover:bg-[#4da9f7] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Start Now
                    </a> </div>    
                    
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                    
                </div>                
            </div>
        </section>
    </div>
  )
}
