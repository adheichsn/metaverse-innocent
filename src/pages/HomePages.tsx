import Link from "next/link";
import React from "react";

function HomePages() {
    return (
            <div className="bg-center bg-no-repeat bg-[url('/images/unsplash1.jpg')] bg-gray-700 bg-blend-multiply bg-cover">
                <div className="px-4 mx-auto text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Metaverse
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Rasakan kecanggihan teknologi Telkom melalui produk-produk unggulan kami,
                        menghadirkan pengalaman virtual yang memukau dan tanpa batas.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/sign-in"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Login
                            <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/sign-up"
                            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white 
                            hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default HomePages;