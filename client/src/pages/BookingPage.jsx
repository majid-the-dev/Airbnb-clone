import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from '../AddressLink';
import PlaceGallery from '../PlaceGallery';
import BookingDates from '../BookingDates';

function BookingPage() {

    const { id } = useParams();
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({ _id }) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            });
        };
    }, [id]);

    if (!booking) {
        return '';
    }

    return (
        <div className='my-8'>
            <h1 className='text-xl'>{booking.place.title}</h1>
            <AddressLink className='my-2 block'>{booking.place.address}</AddressLink>
            <div className='bg-gray-200 p-6 my-6  items-center rounded-2xl flex justify-between'>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>Your booking information:</h2>
                    <BookingDates booking={booking} />
                </div>
                <div className='bg-primary px-8 py-3 text-white rounded-2xl'>
                    <div>Total price</div>
                    <div className='text-xl font-semibold'>₦‎{booking.price}</div>
                </div>

            </div>
            <PlaceGallery place={booking.place} />
        </div>
    )
}

export default BookingPage
