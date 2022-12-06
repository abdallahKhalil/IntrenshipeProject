import React from 'react';
import logo from '../Pages/img/logo.png';

export default function ApplicationLogo({ }) {
    return (
        <>
            <img src={logo} className="mr-3 h-10 sm:h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="Company Logo" />
            
        </>
    );
}
