import React from 'react'

export default function Benefit() {
    return (
        <div className='flex'>
            <div className="mx-40 place-self-end lg:col-span-7">
                <p className="max-w-2xl mr-auto mb-6 font-bold text-gray-700 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">What are the benefits?</p>
                <div>
                    <h1 className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400">
                        Accelerate your job search
                    </h1>
                    <div className='flex gap-6'>
                        <svg className="w-20 h-20 place-self-center text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd" />
                        </svg>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Whether needing a job or currently employed, we work in the background to keep you prepared for new opportunities..</p>
                    </div>

                </div>
                <div>
                    <h1 className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400">
                        Always ready for what{`'`}s next
                    </h1>
                    <div className='flex gap-6'>
                        <svg className="w-20 h-20 place-self-center text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd" />
                        </svg>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Whether needing a job or currently employed, we work in the background to keep you prepared for new opportunities.</p>
                    </div>

                </div>
            </div>
            <dl className="grid max-w-screen-md gap-30 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-4xl md:text-4xl font-extrabold">10+</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">years supporting successful job seekers</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-4xl md:text-4xl font-extrabold">1M+</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">resumes and career documents created</dd>
                </div>
            </dl>
        </div>
    )
}
