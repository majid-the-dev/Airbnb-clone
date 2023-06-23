import React, { useEffect, useState } from 'react'
import AccountNav from '../AccountNav';
import axios from 'axios';
import PlaceImg from '../PlaceImg';
import { BsCreditCard } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BookingDates from '../BookingDates';

function BookingsPage() {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        });
    }, []);

    return (
        <div>
            <AccountNav />
            <div>
                {bookings?.length > 0 && bookings.map(booking => (
                    <Link to={`/account/bookings/${booking._id}`} className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden'>
                        <div className='w-48'>
                            <PlaceImg place={booking.place} />
                        </div>
                        <div className='py-3 pr-3 grow'>
                            <h2 className='text-lg font-semibold'>{booking.place.title}</h2>
                            <div className=''>
                                <BookingDates booking={booking} className='mb-2 mt-4 text-gray-500' />
                                <div className='flex gap-1 items-center'>
                                    <BsCreditCard />
                                    Total price: {booking.price}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BookingsPage;
