// components/ProfileProperties.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = confirm('Are you sure you want to delete this property?');

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);

        toast.success('Property Deleted');
      } else {
        toast.error('Failed to delete property');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete property');
    }
  };

  return properties.map((property) => (
    <div key={property._id} className='mb-10'>
      <Link href={`/properties/${property._id}`}>
        <Image
          className='h-48 w-full rounded-lg object-cover'
          src={property.images[0]}
          alt=''
          width={500}
          height={200}
          priority={true}
        />
      </Link>
      <div className='mt-4'>
        <p className='text-lg font-semibold'>{property.name}</p>
        <p className='text-gray-600'>
          Address: {property.location.street} {property.location.city}{' '}
          {property.location.state}
        </p>
      </div>
      <div className='mt-4'>
        <Link
          href={`/properties/${property._id}/edit`}
          className='bg-blue-600 text-white px-4 py-2 rounded-md mr-3 hover:bg-blue-700 transition duration-300'
        >
          Edit
        </Link>
        <button
          className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300'
          type='button'
          onClick={() => handleDeleteProperty(property._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;