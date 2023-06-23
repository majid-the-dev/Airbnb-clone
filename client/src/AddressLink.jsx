import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi'

function AddressLink({ children, className=null }) {

    if (!className) {
       className = 'my-3 block' 
    }

    className += 'my-3 block flex items-center gap-1 font-semibold underline';

    return (
        <a className={className} target='_blank' href={`https://maps.google.com/?q=${children}`}>
            <TfiLocationPin />
            {children}
        </a>
    )
}

export default AddressLink
