import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import RealStateFooter from '@/Components/FooterS';





export default function Dashboard(props) {
    const id = props.auth.user.id;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Abdallah</h2>}
        >
            <Head title="Profile" />
            <div className="block item-center m-auto bg-stone-100 shadow-sm rounded-2xl border-gray-100 border-8 outline-4 outline-offset-1 outline-gray-100 my-6">
                <div className="py-2 pt-12 ">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                Account
                            </div>
                            <div className='block pl-12'>
                                <input
                                    type="text"
                                    name="email"
                                    className="my-1 flex mr-24 bg-gray-100 rounded border-none"
                                    value={props.auth.user.email}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                            <Link href={route('Posts.changePass')}>Change your Password</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2 pt-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <Link href={route('Posts.favorite')}>Favorites</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200" >
                                <Link href={route('Posts.index', { id })}>Your posts</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200" >
                                <Link href={route('Posts.Alert')}>Create Alert</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <RealStateFooter/>

        </AuthenticatedLayout>
    );
}
