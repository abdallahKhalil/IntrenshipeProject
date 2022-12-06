import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import logo from '../Pages/img/logo.png';
import background from '../Pages/img/507309.jpg';
import sell from '../Pages/img/for-sale.jpg';
import buy from '../Pages/img/buy-a-house.jpg';
import rental from '../Pages/img/rental.jpg';
import RealStateNavbar from '@/Components/nav'
import RealStateFooter from '@/Components/FooterS';
/*import { BrowserRouter as Router,Routes, Route } from "react-router-dom";*/




export default function Welcome(props) {
    return (
        <RealStateNavbar
         auth={props.auth}
         
        >

            <Head title="Real State" />

            <div className="relative flex  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 sm:mx-0">
               
                <div className="w-full mx-0 sm:px-0 lg:px-2 ">
                    <div className="bg-local max-h-full bg-origin-padding bg-auto bg-center bg-blend-normal py-32 px-28 m-1 content-evenly md:items-center flow-root" style={{ backgroundImage: `url(${background})` }}>
                        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-4 mx-20 mt-52 float-left hover:-translate-y-1 hover:scale-110">
                            <Link href={route('Main.buyP')}>
                                <img className="rounded-t-lg " src={buy} alt="img" />
                            </Link>
                            <div className="p-5">
                                <Link href={route('Main.buyP')}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buy your dream home</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                                <Link  href={route('Main.buyP')} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Browse a house
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-20 my-4 mt-52 float-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <Link href={route('Main.sellP')}>
                                <img className="rounded-t-lg" src={sell} alt="img" />
                            </Link>
                            <div className="p-5">
                                <Link href={route('Main.sellP')}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sell your options</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                                <Link href={route('Main.sellP')} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Sell your options
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-20 my-4 mt-52 float-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <Link href={route('Main.rentP')}>
                                <img className="rounded-t-lg" src={rental} alt="img" />
                            </Link>
                            <div className="p-5">
                                <Link href={route('Main.rentP')}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rent a home</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                                <Link href={route('Main.rentP')} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Find a rent
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    <RealStateFooter className="w-full"/>
                </div>
            </div>
        </RealStateNavbar>
    );
}
