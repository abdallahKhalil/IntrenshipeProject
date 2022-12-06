import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';



export default function Dashboard(props) {

    const { post } = usePage().props;
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            console.log(e.target.value);
            Inertia.delete(route("Posts.delete", e.target.value));

        }
    }

    console.log("test", post);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Abdallah</h2>}
        >
            <Head title="My Posts" />
            <div className="w-full-width relative flex  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 sm:mx-0">
                <div className="w-full mx-4 sm:px-0 lg:px-2 min-h-screen ">

                    {post.map(({ id, size, price, n_bedroom, n_bathroom, description, city, road, image }) => (
                        <div key={id} className="relative md:max-w-7xl  bg-white  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-1 mx-auto mt-8 hover:-translate-y-1 hover:scale-110">

                            <a href="" className="flex flex-col  items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-7xl px-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-2">
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

                                        <tr>
                                            <td className="py-2 px-6">
                                                <Link

                                                    href={route('Posts.edit', id)}
                                                    id={props}
                                                    type="button"
                                                    className="bg-transparent w-52 text-center hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mb-1"
                                                >Edit
                                                </Link>
                                            </td>
                                            <td className="py-2 px-6">
                                                <button
                                                    onClick={destroy}
                                                    value={id}
                                                    type="button"
                                                    className="bg-transparent w-52 text-center hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mb-1"
                                                >Delete
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}