import React from 'react';
import { BsWifi, BsCarFront, BsDoorClosed } from 'react-icons/bs';
import { FaDesktop, FaDog } from 'react-icons/fa';
import { BiRadio } from 'react-icons/bi';

function Perks({ selected, onChange }) {

    function handleCbClick(e) {
        const {checked, name} = e.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('wifi')} name='wifi' onChange={handleCbClick} />
                <BsWifi />
                <span>Wifi</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('parking')} name='parking' onChange={handleCbClick} />
                <BsCarFront />
                <span>Free parking spot</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('tv')} name='tv' onChange={handleCbClick} />
                <FaDesktop />
                <span>TV</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('radio')} name='radio' onChange={handleCbClick} />
                <BiRadio />
                <span>Radio</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('pets')} name='pets' onChange={handleCbClick} />
                <FaDog />
                <span>Pets</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('entrance')} name='entrance' onChange={handleCbClick} />
                <BsDoorClosed />
                <span>Private entrance</span>
            </label>
        </>
    )
}

export default Perks;
