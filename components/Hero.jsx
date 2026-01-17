// components/Hero.jsx
import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-20 mb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold text-white sm:text-6xl md:text-7xl drop-shadow-lg'>
            Find Your Perfect Rental
          </h1>
          <p className='my-6 text-xl text-gray-100'>
            Discover the ideal property that suits your lifestyle in Sri Lanka
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};

export default Hero;