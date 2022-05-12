import React from 'react';
import ListingForm from '../Components/ListingForm';

export default function CreateListing() {
  return (
    <div className='body'>
      <div className='img'></div>
      <div className='title'>
        Create Listing
        <hr className='hr' />
      </div>
      <div className='div-body'>
        <div className='form-div'>
          <ListingForm />
        </div>
      </div>
    </div>
  )
}
