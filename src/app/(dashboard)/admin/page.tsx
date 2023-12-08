import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { Metadata } from 'next/types';
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard | Telkom InnoCent',
  description: 'smarteye.id',
};

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  if (session?.user) {
    return (
      <div className='pt-10'>
        <div className="flex items-center pt-10">
          <div className="ml-4 pt-10">
            <h1 className="text-2xl font-extrabold ml-8">{`Selamat datang, ${session?.user.username || session.user.name}!`}</h1>
          </div>
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto">
            <iframe
              src='https://mdl-showcase.svcc.io/'
              title='Unity Pages'
              width='100%'
              height='800px'
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className='pt-10'>
      <div className='pt-10'
          style={{
            backgroundImage: "url('/images/Admins.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "35vh",
            width: "100%",
          }}
        ></div>
      <ol className="items-center sm:flex mx-8">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telkom Indonesia</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Fast Connectivity, Digital Solutions, Leading the Future.</p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Metaverse</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Where Real and Virtual Worlds Unite.</p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telkom InnoCent</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Paving the Way for Digital Integrity and Innovation.</p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default page