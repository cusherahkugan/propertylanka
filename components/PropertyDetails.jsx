// components/PropertyDetails.jsx
const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className='bg-white p-8 rounded-lg shadow-lg text-center md:text-left'>
        <div className='text-gray-600 mb-4'>{property.type}</div>
        <h1 className='text-4xl font-bold mb-6'>{property.name}</h1>
        <div className='text-gray-600 mb-4 flex align-middle justify-center md:justify-start'>
          <i className='fa-solid fa-location-dot text-lg text-red-700 mr-2'></i>
          <p className='text-red-700'>
            {property.location.street}, {property.location.city}{' '}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-600 mr-2 font-bold'>Nightly</div>
            <div className='text-2xl font-bold text-blue-600'>
              {property.rates.nightly ? (
                `Rs.${property.rates.nightly.toLocaleString()}`
              ) : (
                <i className='fa-solid fa-xmark text-red-700'></i>
              )}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-600 mr-2 font-bold'>Weekly</div>
            <div className='text-2xl font-bold text-blue-600'>
              {property.rates.weekly ? (
                `Rs.${property.rates.weekly.toLocaleString()}`
              ) : (
                <i className='fa-solid fa-xmark text-red-700'></i>
              )}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-gray-600 mr-2 font-bold'>Monthly</div>
            <div className='text-2xl font-bold text-blue-600'>
              {property.rates.monthly ? (
                `Rs.${property.rates.monthly.toLocaleString()}`
              ) : (
                <i className='fa-solid fa-xmark text-red-700'></i>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-8 rounded-lg shadow-lg mt-6'>
        <h3 className='text-lg font-bold mb-6'>Description & Details</h3>
        <div className='flex justify-center gap-6 text-blue-600 mb-4 text-xl space-x-9'>
          <p>
            <i className='fa-solid fa-bed'></i> {property.beds}{' '}
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <i className='fa-solid fa-bath'></i> {property.baths}{' '}
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <i className='fa-solid fa-ruler-combined'></i>
            {property.square_feet}{' '}
            <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-gray-600 mb-4 text-center'>{property.description}</p>
      </div>

      <div className='bg-white p-8 rounded-lg shadow-lg mt-6'>
        <h3 className='text-lg font-bold mb-6'>Amenities</h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2'>
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <i className='fas fa-check text-green-600 mr-2'></i> {amenity}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PropertyDetails;