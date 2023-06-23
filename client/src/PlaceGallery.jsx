import React, { useState } from 'react';
import { FaThList } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

function PlaceGallery({ place }) {

    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className='absolute inset-0 bg-black text-white min-h-screen'>
                <div className='bg-black p-8 grid gap-8'>
                    <div>
                        <h2 className='text-2xl mr-48 leading-8'>Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='fixed right-12 top-7 flex items-center gap-2 py-2 px-4 rounded-2xl bg-white shadow shadow-black text-black'>
                            <GrClose className='text-white' />
                            Close photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div>
                            <img src={'http://localhost:4000/uploads/' + photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='relative'>
            <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden'>
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover cursor-pointer' src={'http://localhost:4000/uploads/' + place.photos[0]} alt="" />
                        </div>
                    )}
                </div>
                <div className='grid'>
                    {place.photos?.[1] && (
                        <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover cursor-pointer' src={'http://localhost:4000/uploads/' + place.photos[1]} alt="" />
                    )}
                    <div className='overflow-hidden'>
                        {place.photos?.[2] && (
                            <img onClick={() => setShowAllPhotos(true)} className='aspect-square object-cover relative top-2 cursor-pointer' src={'http://localhost:4000/uploads/' + place.photos[2]} alt="" />
                        )}
                    </div>
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className='flex items-center gap-2 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500'>
                <FaThList className='text-primary text-sm' />
                Show more photos
            </button>
        </div>
    )
}

export default PlaceGallery;
