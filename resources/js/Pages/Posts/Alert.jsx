import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RealStateFooter from '@/Components/FooterS';
import InputLabel from '@/Components/InputLabel';
import { useForm, Head, usePage } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Dashboard(props) {
    const {posts} = usePage().props;
    const { data, setData, processing, post, reset } = useForm({
        city: '',
        price: '',
        size: '',
        category: '',
        status: ''
    })
    const City = (e) => {
        e.preventDefault();
        data.city = e.target.value;
    }
    const Categories = (e) => {
        e.preventDefault();
        data.category = e.target.value;
    }
    const Status = (e) => {
        e.preventDefault();
        data.status = e.target.value;
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
       post(route('Posts.getAlert'));
        reset();
        alert("Alert was set successfully");
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Abdallah</h2>}
        >
            <Head title="Profile" />
            <form onSubmit={submit}>
                <div className="block min-h-screen item-center m-auto bg-stone-100 shadow-sm rounded-2xl border-gray-100 border-8 outline-4 outline-offset-1 outline-gray-100 my-6">
                    <div className="py-2 pt-12 ">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="relative z-0 mb-2 m-auto group max-w-screen-sm ">
                                    <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                                    <select onChange={City}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option defaultValue >Which city you prefer</option>
                                        <option value="Beirut">Beirut</option>
                                        <option value="Sidon">Sidon</option>
                                        <option value="Tripoli">Tripoli</option>
                                        <option value="Tyre">Tyre</option>
                                        <option value="Jounie">Jounie</option>
                                        <option value="Zahle">Zahle</option>
                                        <option value="Nabatiye">Nabatiye</option>
                                        <option value="Baalbek">Baalbek</option>
                                        <option value="Aaley">Aaley</option>
                                        <option value="Jbail">Jbail</option>
                                        <option value="Jezzine">Jezzine</option>
                                        <option value="Bent Jbail">Bent Jbail</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-auto">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="relative z-0 mb-2 m-auto group max-w-screen-sm">
                                    <input type="number" min="0" max="10000000000" step="10" name="Price" value={data.price} onChange={e => setData('price', e.target.value)}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <InputLabel htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price greater than ($)</InputLabel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 pt-6">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="relative z-0 mb-2 m-auto group max-w-screen-sm">
                                    <input type="number" name="Size" value={data.size} onChange={e => setData('size', e.target.value)}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <InputLabel htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size Greater Than (m2)</InputLabel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="relative z-0 mb-2 m-auto group max-w-screen-sm">
                                    <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                                    <select onChange={Categories}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option defaultValue >What Categories you prefer</option>
                                        <option value="house">House</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa</option>
                                        <option value="land">Land</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="relative z-0 mb-2 m-auto group max-w-screen-sm">
                                    <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                                    <select onChange={Status}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option defaultValue >What is the Status</option>
                                        <option value="sell">Sell</option>
                                        <option value="rent">Rent</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 mb-2 m-auto group max-w-screen-sm">
                            <a href={route('Posts.mail')}>
                            <PrimaryButton className="mt-4" processing={processing}>Submit</PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            <RealStateFooter className="bottom-0" />
        </AuthenticatedLayout>
    );
}
