import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `bg-transparent w-1/4 hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
