import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsHouseCheck, BsCalendarCheck, BsPerson } from 'react-icons/bs';

function AccountNav() {

  const {pathname} = useLocation();
  let subpage = pathname.split('/')?.[2];

  if (subpage === undefined) {
    subpage = 'profile'
  };

  function linkClasses(type=null) {
    let classes = 'inline-flex gap-1.5 py-2 px-6 rounded-full';
    if (type === subpage) {
      classes += 'py-2 px-6 bg-primary text-white rounded-full';
    } else {
      classes = 'inline-flex gap-1.5 py-2 px-6 bg-gray-200 rounded-full'
    }
    return classes;
  }

  return (
    <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
      <Link to={'/account'} className={linkClasses('profile')}><BsPerson className='mt-1' />My profile</Link>
      <Link to={'/account/bookings'} className={linkClasses('bookings')}><BsCalendarCheck className='mt-1' />My bookings</Link>
      <Link to={'/account/places'} className={linkClasses('places')}><BsHouseCheck className='mt-1' />My Accommodations</Link>
    </nav>
  )
}

export default AccountNav;
