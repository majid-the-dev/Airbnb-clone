import React, { useState } from 'react';
import { BsCloudUpload, BsStar, BsStarFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios';

function PhotosUploader({addedPhotos, onChange}) {

    const [photoLink, setPhotoLink] = useState('');

    async function addPhotoByLink(e) {
        e.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink});
        onChange(prev => {
            return [...prev, filename]
        });
        setPhotoLink('');
    };

    function uploadPhoto(e) {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
            const {data:filenames} = response;
            onChange(prev => {
                return [...prev, ...filenames];
            });
        });
    };

    function removePhoto(e, filename) {
        e.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !== filename)]);
    }

    function selectAsMainPhoto(e, filename) {
        e.preventDefault();
        const addedPhotosWithoutSelected = addedPhotos.filter(photo => photo !== filename);
        const newAddedPhotos = [filename, ...addedPhotosWithoutSelected];
        onChange(newAddedPhotos);
    }

    return (
        <>
            <div className='flex gap-2'>
                <input type="text" placeholder={'Add using a link...jpg'} value={photoLink} onChange={e => setPhotoLink(e.target.value)} />
                <button className='bg-gray-200 px-4 rounded-2xl' onClick={addPhotoByLink}>Add&nbsp;photo</button>
            </div>
            <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div className='h-32 flex relative' key={link}>
                        <img src={'http://localhost:4000/uploads/' +link} alt="" className='rounded-2xl w-full object-cover' />
                        <button onClick={e => removePhoto(e, link)} className='cursor-pointer absolute bottom-1 right-1 bg-black bg-opacity-50 rounded-2xl py-2 px-2'>
                            <FaTrashAlt className='text-white' />
                        </button>
                        <button onClick={e => selectAsMainPhoto(e, link)} className='cursor-pointer absolute bottom-1 left-1 bg-black bg-opacity-50 rounded-2xl py-2 px-2'>
                            {link === addedPhotos[0] 
                                ? 
                                <BsStarFill className='text-primary' />
                                :
                                <BsStar className='text-white' />
                            }
                        </button>
                    </div>
                ))}
                <label className='h-32 cursor-pointer flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-xl text-gray-600'><BsCloudUpload />
                    <input type='file' multiple className='hidden' onChange={uploadPhoto} />
                    Upload
                </label>
            </div>
        </>
    )
}

export default PhotosUploader;
