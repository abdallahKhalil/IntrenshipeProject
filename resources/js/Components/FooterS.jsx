import React from 'react';
import logo from '../Pages/img/logo.png';

export default function footerS(){
    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 float-none clear-both w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center">
                <img src={logo} className="mr-3 h-10 sm:h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="Company Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Abdallah</span>
            </a>

            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Abdallah Khalil</a>. All Rights Reserved.
        </span>
    </footer>
    );
}