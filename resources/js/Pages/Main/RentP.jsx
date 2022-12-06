import React, { Component } from 'react';
import { Link, Head, usePage, useForm } from '@inertiajs/inertia-react';
import RealStateFooter from '@/Components/FooterS';
import Dropdown from '@/Components/Dropdown';
import Pagination from '@/Components/Pagination';
import RealStateNav from '@/Components/nav';

export default function Welcome(props){
    let { posts } = usePage().props;
    let { post } = useForm({ favorite: '' });

    console.log(posts);

    const handleFav = (e, d) => {
        if (e == 0) {
            e = 1;
            favHandler(e, d);
        }
        else {
            e = 0;
            favHandler(e, d);
        }
    }
    const favHandler = (e, d) => {
        console.log("post successfully")
        post(route('Main.updateFav', d));
    }
    
    const state="rent";
    const size1 = "smallToLarge";
    const size2 = "largeToSmall";
    const house = "house";
    const villa = "villa";
    const apartment = "apartment";
    const land = "land";
    return html();
    function html(){
        return (
            <RealStateNav
            auth={props.auth}
            
            >
                <Head title="Find a rent" />
                <div className="w-full-width relative flex  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 sm:mx-0">
                    <div className="w-full mx-0 sm:px-0 lg:px-2 min-h-screen">
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative ojBtn">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 mr-24 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    + Filter
    
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
    
                                        <Dropdown.Content>
                                            <Dropdown.Link href={route("Main.rentP",{state})} as="button" method="get">
                                                Price: low to high
                                                
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{size1})} method="get" as="button">
                                                Size: small to large
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{size2})} method="get" as="button">
                                                Size: large to small
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{house})} method="get" as="button">
                                                All Houses
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{villa})} method="get" as="button">
                                                All Villas
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{apartment})} method="get" as="button">
                                                All Apartments
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route("Main.rentP",{land})} method="get" as="button">
                                                All Land
                                            </Dropdown.Link>  
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                      
                        {posts.data.map(({ id, size, price, n_bedroom, n_bathroom, description, city, road, image, favorite }) => (
                            <div key={id} className="relative md:max-w-4xl bg-white mb-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-1 mx-auto mt-8 hover:-translate-y-1 hover:scale-110">
                                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <Link href={route("Main.viewDetails", { id })}>
                                        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-4" src={image} alt="" />
                                    </Link>
                                    <Link className="flex flex-col justify-between p-4 leading-normal" href={route("Main.viewDetails", { id })}>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Size: {size} m2</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {price} $</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bedrooms: {n_bedroom}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bathrooms: {n_bathroom}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Address: city {city} , road {road}</p>
                                    </Link>
                                    <button className="bg-red-600 text-white active:bg-red-800 absolute top-1 right-0 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none  mr-1 mb-1 ease-linear transition-all duration-150 focus:outline-none focus:ring focus:ring-red-400 click:pointer-events-auto"
                                        type="button" onClick={() => {
    
                                            handleFav(favorite, id)
                                        }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={favorite.length > 0 ? "white" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Pagination className="mt-6" links={posts.links}/>
                <RealStateFooter />
            </RealStateNav>
    
        );
    }
  
}