import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm,usePage } from '@inertiajs/inertia-react';


export default function ChangePass(props) {

    const { error } = usePage().props;
    const {setData, data, put, processing, errors } = useForm({
        
       oldPassword:'',
       newPassword:''
        
    });
    console.log(error);
    const submit = (e) => {
        e.preventDefault();
        put(route('Posts.resetPassword', data));
       
    };
    const onHandleChange = (event) => {
        setData('oldPassword', event.target.value);
    };
    const onHandleChange1 = (event) => {
        setData('newPassword', event.target.value);
    };
    return (
        
        <GuestLayout>
            <Head title="Reset password" />


            <form onSubmit={submit}>
            
                <div>
                    <InputLabel forInput="password" value="Old Password" />

                    <TextInput
                        type="Password"
                        name="oldPassword"
                        value={data.oldPassword}
                        className="mt-1 block w-full"
                        autoComplete="Old Password"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={error} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="New Password" />

                    <TextInput
                        type="password"
                        name="newPassword"
                        value={data.newPassword}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange1}
                        
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                
                <div className="flex items-center justify-end mt-6">
                  
                    <PrimaryButton className="ml-4" processing={processing}>
                        Change Password
                    </PrimaryButton>
                </div>
            </form>
            
        </GuestLayout>
        
    );
}
