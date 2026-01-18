// components/PropertyEditForm.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const PropertyEditForm = ({ property }) => {
  const [fields, setFields] = useState({
    type: property.type,
    name: property.name,
    description: property.description,
    location: {
      street: property.location.street,
      city: property.location.city,
      state: property.location.state,
      zipcode: property.location.zipcode,
    },
    beds: property.beds,
    baths: property.baths,
    square_feet: property.square_feet,
    amenities: property.amenities,
    rates: {
      weekly: property.rates.weekly,
      monthly: property.rates.monthly,
      nightly: property.rates.nightly,
    },
    seller_info: {
      name: property.seller_info.name,
      email: property.seller_info.email,
      phone: property.seller_info.phone,
    },
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if nested property
    if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');

      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      // Not nested
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;

    // Clone the current array
    const updatedAmenities = [...fields.amenities];

    if (checked) {
      // Add value to array
      updatedAmenities.push(value);
    } else {
      // Remove value from array
      const index = updatedAmenities.indexOf(value);
      updatedAmenities.splice(index, 1);
    }

    // Update state with updated array
    setFields((prevFields) => ({
      ...prevFields,
      amenities: updatedAmenities,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const res = await fetch(`/api/properties/${property._id}`, {
        method: 'PUT',
        body: formData,
      });

      if (res.status === 200) {
        toast.success('Property Updated Successfully');
        router.push(`/properties/${property._id}`);
      } else if (res.status === 401 || res.status === 403) {
        toast.error('Permission denied');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-3xl text-center font-bold mb-8 text-blue-600'>
        Edit Property
      </h2>

      <div className='mb-6 bg-blue-50 p-6 rounded-lg'>
        <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
          Property Type
        </label>
        <select
          id='type'
          name='type'
          className='border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
          value={fields.type}
          onChange={handleChange}
        >
          <option value='Apartment'>Apartment</option>
          <option value='Condo'>Condo</option>
          <option value='House'>House</option>
          <option value='Cabin Or Cottage'>Cabin or Cottage</option>
          <option value='Room'>Room</option>
          <option value='Studio'>Studio</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-2'>Listing Name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='eg. Beautiful Apartment In Colombo'
          required
          value={fields.name}
          onChange={handleChange}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='border rounded w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows='5'
          placeholder='Add an optional description of your property'
          value={fields.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className='mb-6 bg-purple-50 p-6 rounded-lg'>
        <label className='block text-gray-700 font-bold mb-2'>Location</label>
        <input
          type='text'
          id='street'
          name='location.street'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          placeholder='Street'
          value={fields.location.street}
          onChange={handleChange}
        />
        <input
          type='text'
          id='city'
          name='location.city'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          placeholder='City'
          required
          value={fields.location.city}
          onChange={handleChange}
        />
        <input
          type='text'
          id='state'
          name='location.state'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          placeholder='State/Province'
          required
          value={fields.location.state}
          onChange={handleChange}
        />
        <input
          type='text'
          id='zipcode'
          name='location.zipcode'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          placeholder='Zipcode'
          value={fields.location.zipcode}
          onChange={handleChange}
        />
      </div>

      <div className='mb-6 flex flex-wrap gap-4'>
        <div className='flex-1'>
          <label htmlFor='beds' className='block text-gray-700 font-bold mb-2'>
            Beds
          </label>
          <input
            type='number'
            id='beds'
            name='beds'
            className='border rounded w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
            value={fields.beds}
            onChange={handleChange}
          />
        </div>
        <div className='flex-1'>
          <label htmlFor='baths' className='block text-gray-700 font-bold mb-2'>
            Baths
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='border rounded w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
            value={fields.baths}
            onChange={handleChange}
          />
        </div>
        <div className='flex-1'>
          <label htmlFor='square_feet' className='block text-gray-700 font-bold mb-2'>
            Square Feet
          </label>
          <input
            type='number'
            id='square_feet'
            name='square_feet'
            className='border rounded w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
            value={fields.square_feet}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-2'>Amenities</label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <input
              type='checkbox'
              id='amenity_wifi'
              name='amenities'
              value='Wifi'
              className='mr-2'
              checked={fields.amenities.includes('Wifi')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_wifi'>Wifi</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_kitchen'
              name='amenities'
              value='Full Kitchen'
              className='mr-2'
              checked={fields.amenities.includes('Full Kitchen')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_kitchen'>Full kitchen</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_washer_dryer'
              name='amenities'
              value='Washer & Dryer'
              className='mr-2'
              checked={fields.amenities.includes('Washer & Dryer')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_washer_dryer'>Washer & Dryer</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_parking'
              name='amenities'
              value='Free Parking'
              className='mr-2'
              checked={fields.amenities.includes('Free Parking')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_parking'>Free Parking</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_pool'
              name='amenities'
              value='Swimming Pool'
              className='mr-2'
              checked={fields.amenities.includes('Swimming Pool')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_pool'>Swimming Pool</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_hot_tub'
              name='amenities'
              value='Hot Tub'
              className='mr-2'
              checked={fields.amenities.includes('Hot Tub')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_hot_tub'>Hot Tub</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_gym'
              name='amenities'
              value='Gym/Fitness Center'
              className='mr-2'
              checked={fields.amenities.includes('Gym/Fitness Center')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_gym'>Gym/Fitness Center</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_air_conditioning'
              name='amenities'
              value='Air Conditioning'
              className='mr-2'
              checked={fields.amenities.includes('Air Conditioning')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_air_conditioning'>Air Conditioning</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_balcony'
              name='amenities'
              value='Balcony/Patio'
              className='mr-2'
              checked={fields.amenities.includes('Balcony/Patio')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_balcony'>Balcony/Patio</label>
          </div>
        </div>
      </div>

      <div className='mb-6 bg-green-50 p-6 rounded-lg'>
        <label className='block text-gray-700 font-bold mb-3'>
          Rates (Leave blank if not applicable)
        </label>
        <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6'>
          <div className='flex items-center'>
            <label htmlFor='weekly_rate' className='mr-2'>
              Weekly
            </label>
            <input
              type='number'
              id='weekly_rate'
              name='rates.weekly'
              className='border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500'
              value={fields.rates.weekly}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='monthly_rate' className='mr-2'>
              Monthly
            </label>
            <input
              type='number'
              id='monthly_rate'
              name='rates.monthly'
              className='border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500'
              value={fields.rates.monthly}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='nightly_rate' className='mr-2'>
              Nightly
            </label>
            <input
              type='number'
              id='nightly_rate'
              name='rates.nightly'
              className='border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500'
              value={fields.rates.nightly}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <label htmlFor='seller_name' className='block text-gray-700 font-bold mb-2'>
          Seller Name
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Name'
          value={fields.seller_info.name}
          onChange={handleChange}
        />
        <label htmlFor='seller_email' className='block text-gray-700 font-bold mb-2'>
          Seller Email
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Email address'
          required
          value={fields.seller_info.email}
          onChange={handleChange}
        />
        <label htmlFor='seller_phone' className='block text-gray-700 font-bold mb-2'>
          Seller Phone
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='border rounded w-full py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Phone'
          value={fields.seller_info.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300'
          type='submit'
        >
          Update Property
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;