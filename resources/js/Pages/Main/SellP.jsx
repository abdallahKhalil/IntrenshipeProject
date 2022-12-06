import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RealStateFooter from '@/Components/FooterS';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import { useForm, Head } from '@inertiajs/inertia-react';


export default function sell(props) {

     const { data, setData, processing, reset, errors, post } = useForm({
        description: '', image: null , city: '', road: '', price: '', size: '',
        n_bedroom: '', n_bathroom: '', status: '', category: '', latitude: '', longitude: ''
    });
    const onFileChange= (e) =>{
        const file = e.target.files[0];
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
        data.image= file;
      }
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
       post(route('Main.store'));
        reset();

    };
    const bedroomHandler = (e) => {
        console.log(e.target.value);
        setData('n_bedroom', e.target.value);
    }
    // need to check the array to take 4 decimals not just 2
    var citiesList=[
        {latitude:33.8869, longitude: 35.5131 ,name:'Beirut'},
        {latitude:33.5606, longitude:  35.3981  ,name:'Sidon'},
        {latitude:34.4333 , longitude: 35.8333  ,name:'Tripoli'},
        {latitude:33.2667 , longitude: 35.2000  ,name:'Tyre'},
        {latitude:33.9697 , longitude: 35.6156  ,name:'Jounie'},
        {latitude:33.8439 , longitude: 35.9072  ,name:'Zahle'},
        {latitude:33.3833 , longitude: 35.4500  ,name:'Nabatiye'},
        {latitude:34.0061, longitude:  36.2086  ,name:'Baalbek'},
        {latitude:33.8053 , longitude: 35.6000  ,name:'Aaley'},
        {latitude:34.1167 , longitude: 35.6500  ,name:'Jbail'},
        {latitude:33.5417, longitude:  35.5844  ,name:'Jezzine'},
        {latitude:33.1194 , longitude: 35.4333  ,name:'Bent Jbail'}
    ];
    const bathroomHandler = (e) => {setData('n_bathroom', e.target.value );console.log(e.target.value);}
    const statusHandler = (e) => {setData('status', e.target.value);console.log(e.target.value); }
    const CatagoriesHandler = (e) => {setData('category', e.target.value);console.log(e.target.value); }
    const CityHandler = async (e) => {
        var city=citiesList.filter(d=>d.name==e.target.value);
        city = city[0];

        console.log(city);
        var latitude = city.latitude;
        console.log(latitude);
        var longitude = city.longitude;
        console.log(longitude);

        data.city=city.name;
        data.latitude=city.latitude;
        data.longitude=city.longitude;


        // setData('latitude',65565665);
        // setData('city',city.name);
        // setData('longitude', longitude);
    }

    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Abdallah</h2>}
        >
            <Head title="Sell your house" />
            <form onSubmit={submit} className="px-24" >
                <div className="block item-center m-auto bg-stone-100 shadow-sm rounded-2xl border-gray-100 border-8 outline-4 outline-offset-1 outline-gray-100 my-6">

                    <div className="flex justify-center items-center max-w-screen-sm w-1/2 my-24 shadow-lg m-auto max-h-40">
                        
                        <InputLabel for="multiple-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input  type="file" className="hidden" name="image" onChange={onFileChange} multiple />
                        </InputLabel>

                    </div>
                    <div>
                        <div className="relative z-0 mb-2 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                            <select onChange={CityHandler} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option defaultValue >city</option>
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
                            <span className="text-red-600">{errors.city}</span>

                        </div>

                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <input type="text" name="Road" value={data.road} onChange={e => setData('road', e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                            <InputLabel htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Road</InputLabel>
                            <span className="text-red-600">{errors.road}</span>

                        </div>

                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <input type="number" min="0" max="10000000000" step="10" name="Price" value={data.price} onChange={e => setData('price', e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                            <InputLabel htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price in $</InputLabel>
                            <span className="text-red-600">{errors.price}</span>

                        </div>

                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <input type="number" name="Size" value={data.size} onChange={e => setData('size', e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                            <InputLabel htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size in m2</InputLabel>
                            <span className="text-red-600">{errors.size}</span>

                        </div>
                        <div className="relative z-0 mb-2 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                            <select onChange={bedroomHandler} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option defaultValue>Bedroom</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="studio">Studio</option>

                            </select>
                            <span className="text-red-600">{errors.n_bedroom}</span>

                        </div>
                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                            <select onChange={bathroomHandler} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option defaultValue >Bathroom</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <span className="text-red-600">{errors.n_bathroom}</span>

                        </div>
                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                            <select onChange={statusHandler} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option defaultValue >Status</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>

                            </select>
                            <span className="text-red-600">{errors.status}</span>

                        </div>
                        <div className="relative z-0 mb-12 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="underline_select" className="sr-only">Underline select</InputLabel>
                            <select onChange={CatagoriesHandler} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option defaultValue >Categories</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="land">Land</option>

                            </select>
                            <span className="text-red-600">{errors.category}</span>

                        </div>

                        <div className="relative z-0 mb-2 m-auto group max-w-screen-sm w-1/2">

                            <InputLabel htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></InputLabel>
                            <textarea value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Describe your house...">
                            </textarea>
                            <span className="text-red-600">{errors.description}</span>

                        </div>
                        <div className="relative z-0 mb-2 m-auto group max-w-screen-sm w-1/2">
                            <PrimaryButton className="mt-4" processing={processing}>Submit</PrimaryButton>
                        </div>
                    </div>

                </div>
            </form>
            <RealStateFooter />
        </AuthenticatedLayout>
    );

}