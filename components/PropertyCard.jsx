import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `Rs.${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `Rs.${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `Rs.${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white'>
      <Link href={`/properties/${property._id}`}>
        <div className='relative h-64 w-full'>
          <Image
            src={property.images[0]}
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='p-6'>
          <div className='text-left md:text-center lg:text-left mb-4'>
            <div className='text-gray-600 mb-2'>{property.type}</div>
            <h3 className='text-2xl font-bold text-gray-900'>{property.name}</h3>
          </div>
          <h3 className='absolute top-4 right-4 bg-white px-4 py-2 rounded-lg text-blue-600 font-bold text-lg shadow-md'>
            {getRateDisplay()}
          </h3>

          <div className='flex justify-center gap-6 text-gray-600 mb-4 border-t border-b border-gray-200 py-3'>
            <p className='flex items-center gap-2'>
              <i className='fa-solid fa-bed text-blue-600'></i> {property.beds}
              <span className='md:hidden lg:inline'>Beds</span>
            </p>
            <p className='flex items-center gap-2'>
              <i className='fa-solid fa-bath text-blue-600'></i> {property.baths}
              <span className='md:hidden lg:inline'>Baths</span>
            </p>
            <p className='flex items-center gap-2'>
              <i className='fa-solid fa-ruler-combined text-blue-600'></i>
              {property.square_feet} <span className='md:hidden lg:inline'>sqft</span>
            </p>
          </div>

          <div className='flex justify-center gap-4 text-gray-700 text-sm mb-4'>
            {property.rates.nightly && (
              <p>
                <i className='fa-solid fa-moon text-purple-600'></i> Nightly
              </p>
            )}
            {property.rates.weekly && (
              <p>
                <i className='fa-solid fa-calendar text-green-600'></i> Weekly
              </p>
            )}
            {property.rates.monthly && (
              <p>
                <i className='fa-solid fa-calendar-days text-orange-600'></i> Monthly
              </p>
            )}
          </div>

          <div className='border border-gray-200 mb-5'></div>

          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex align-middle gap-2 mb-4 lg:mb-0 text-gray-700'>
              <i className='fa-solid fa-location-dot text-lg text-red-600 mt-1'></i>
              <span className='text-red-600'>
                {property.location.city}, {property.location.state}
              </span>
            </div>
            <Link
              href={`/properties/${property._id}`}
              className='h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg text-center text-sm font-semibold transition duration-300 shadow-md hover:shadow-lg'
            >
              View Details
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;