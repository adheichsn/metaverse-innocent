import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full mx-auto md:p-0 md:py-8">
                <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 
                <Link href="https://www.telkom.co.id/sites" className="hover:underline" target='_blank'>Telkom Indonesia. </Link>
                All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;