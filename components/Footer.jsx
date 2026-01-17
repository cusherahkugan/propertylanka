import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 py-8 mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-3xl text-white font-bold'>PropertyLanka</h2>
          <p className='text-gray-400 mt-2'>Find your perfect rental property</p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0 space-x-6'>
          <Link href='/properties' className='text-gray-400 hover:text-white transition duration-300'>
            Properties
          </Link>
          <Link href='/properties/add' className='text-gray-400 hover:text-white transition duration-300'>
            Add Property
          </Link>
          <Link href='/about' className='text-gray-400 hover:text-white transition duration-300'>
            About
          </Link>
          <Link href='/contact' className='text-gray-400 hover:text-white transition duration-300'>
            Contact
          </Link>
        </div>
        <div>
          <p className='text-sm text-gray-400 mt-2 md:mt-0'>
            &copy; {currentYear} PropertyLanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;