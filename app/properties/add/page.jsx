// app/properties/add/page.jsx
import PropertyAddForm from '@/components/PropertyAddForm';

const PropertyAddPage = () => {
  return (
    <section className='bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-lg rounded-lg border border-gray-200 m-4 md:m-0'>
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};

export default PropertyAddPage;

