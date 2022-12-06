import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import ApplicationLogo from '../Components/ApplicationLogo';

export default function nav({ auth, children }) {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full top-0 right-0 sm:block shadow-md z-10 sticky">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                        <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Abdallah</span>
                    </a>
                    <div className="flex top-0 right-0 px-6 py-4 sm:block float-right">
                        <Link href={route('Main.buyP')} className="text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
                            Browse a house
                        </Link>
                        <Link href={route('Main.rentP')} className="text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
                            Rent a house
                        </Link>
                        <Link href={route('Main.sellP')} className="text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
                            Sell your options
                        </Link>
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
                                Welcome, {auth.user.name}
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );

}
