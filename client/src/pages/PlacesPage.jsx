import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AccountNav from '../AccountNav';
import axios from 'axios';
import PlaceImg from '../PlaceImg';

function PlacesPage() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        })
    }, []);

    return (
        <div>
            <AccountNav />
            <div className='text-center'>
                <Link to={'/account/places/new'} className='bg-primary text-white py-2 px-6 rounded-full inline-flex gap-1'><FaPlus className='mt-1' />Add new place</Link>
            </div>

            <div className='mt-4'>
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} className='cursor-pointer flex gap-4 bg-gray-100 p-4 rounded-2xl'>
                        <div className='flex justify-center w-32 h-32 bg-gray-300 grow shrink-0'>
                            <PlaceImg place={place} />
                        </div>
                        <div className='grow-0 shrink'>
                            <h2 className='text-xl '>{place.title}</h2>
                            <p className='text-sm mt-2'>{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PlacesPage;
