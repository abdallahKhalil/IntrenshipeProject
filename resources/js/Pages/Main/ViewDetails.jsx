import React from 'react';
import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RealStateFooter from '@/Components/FooterS';
import { Head, usePage } from '@inertiajs/inertia-react';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import * as olProj from 'ol/proj';
import XYZ from 'ol/source/XYZ';
import { useForm } from '@inertiajs/inertia-react';


export default function Welcome(props) {
 

    const { posts } = usePage().props;
    const [fav, setFav] = useState();
    const {post, data, setData} = useForm({
        fav:''
    });

    console.log(posts, 'test');
    const details = posts[0];
    console.log(details, 'test1')
    console.log('test5555');
    
    const view = new View({
        center: olProj.fromLonLat([details.longitude, details.latitude
        ], 'EPSG:3857'),
        zoom: 12
    });

    const iniMap =  () => {
      //  alert(456);
        new Map({
            target: 'map',
            view: view,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
            ],
        });
    }
    
    
    const handleFav = () => {
        setFav(!fav);
        favHandler(fav);

    }
    const favHandler = (e) => {
        e.preventDefault();
        f_post = e.target.result;
        post(route('favorite.updateFav', [f_post, posts.id, posts.Categories_id, props.auth.id]));
    }
  
  
    // This will run one time after the component mounts

  useEffect(() => {
    const onPageLoad = () => {
      iniMap();
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
   
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Abdallah</h2>}
        >
            
            <Head title="Post Details"  />
            <div className="container m-auto">


                <div className="max-w-7xl max-h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto mb-1 mt-0.5">
                    {posts.map(({ id, size, price, n_bedroom, n_bathroom, description, city, road, image }) => (
                        <div key={id}>
                            <a href="#" onClick={iniMap}>
                                <img className="rounded-t-lg max-w-full m-auto" key={id} src={image} alt="House Images" />
                            </a>

                            <button className="float-right bg-red-600 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none  mr-14 mb-1 ease-linear transition-all duration-150 focus:outline-none focus:ring focus:ring-red-200 click:pointer-events-auto hover:bg-red-500"
                                type="button" onClick={() => handleFav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                            </button>
                            <div className="p-5">

                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">price:</th>
                                            <th scope="col" className="py-3 px-6">size:</th>
                                            <th scope="col" className="py-3 px-6">bathrooms:</th>
                                            <th scope="col" className="py-3 px-6">bedrooms:</th>
                                            <th scope="col" className="py-3 px-6">City:</th>
                                            <th scope="col" className="py-3 px-6">road:</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="py-2 px-6">{price} $</td>
                                            <td className="py-2 px-6">{size} m2</td>
                                            <td className="py-2 px-6">{n_bathroom}</td>
                                            <td className="py-2 px-6">{n_bedroom}</td>
                                            <td className="py-2 px-6">{city}</td>
                                            <td className="py-2 px-6">{road}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="p-2 mb-11 mt-2">
                                    <h4 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-gray-300">House Description</h4>
                                    <p className="text-left text-gray-500 dark:text-gray-400">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div id='map' className='block max-w-6xl h-96 rounded-md m-auto border-4 shadow-md border-opacity-10 mb-1'></div>
                    
                </div>
            </div>
            <RealStateFooter />
        </AuthenticatedLayout>

    );
}