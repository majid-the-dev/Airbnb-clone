import React from 'react';
import format from 'date-fns/format';
import { differenceInCalendarDays } from 'date-fns';
import { BsCalendarCheck, BsMoon } from 'react-icons/bs';

function BookingDates({ booking, className }) {
    return (
        <div className={'flex gap-1 items-center '+className}>
            <BsMoon />
            {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights:
            <div className='flex gap-3 ml-2 items-center'>
                <div className='flex gap-1 items-center'>
                    <BsCalendarCheck /> {format(new Date(booking.checkIn), 'dd-MM-yyyy')}
                </div>
                &rarr;
                <div className='flex gap-1 items-center'>
                    <BsCalendarCheck /> {format(new Date(booking.checkOut), 'dd-MM-yyyy')}
                </div>
            </div>
        </div>
    )
}

export default BookingDates;
