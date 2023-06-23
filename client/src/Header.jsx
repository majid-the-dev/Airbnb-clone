import React, { useContext } from 'react';
import { FaAirbnb, FaSearch, FaUserCircle } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function Header() {

    const {user} = useContext(UserContext);

    return (
        <header className='flex justify-between'>
            <Link to={'/'} href="" className='flex items-center gap-1'>
                <FaAirbnb className='w-8 h-6 font-extrabold text-primary' />
                <span className='font-bold text-xl'>airbnb</span>
            </Link>

            <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200'>
                <div>Anywhere</div>
                <div className='border-l border-gray-300'></div>
                <div>Any week</div>
                <div className='border-l border-gray-300'></div>
                <div>Add guests</div>
                <button className='bg-primary text-white p-1 rounded-full'>
                    <FaSearch className='w-4 h-3' />
                </button>
            </div>

            <Link to={user ? '/account' : '/login'} className='flex gap-2 items-center border border-gray-300 rounded-full py-0 px-4'>
                <CgMenu className='w-4 h-5 cursor-pointer' />
                <FaUserCircle className='text-gray-500 w-5 h-5 cursor-pointer' />
                {!!user && (
                    <div>{user.name}</div>
                )}
            </Link>
        </header>
    )
}

export default Header
