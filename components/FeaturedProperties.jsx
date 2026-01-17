// components/FeaturedProperties.jsx
import PropertyCard from './PropertyCard';
import { fetchProperties } from '@/utils/requests';

const FeaturedProperties = async () => {
  const data = await fetchProperties({ showFeatured: true });

  return data.properties && data.properties.length > 0 ? (
    <section className='bg-gradient-to-r from-blue-50 to-purple-50 px-4 pt-12 pb-16'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-4xl font-bold text-purple-600 mb-8 text-center'>
          Featured Properties
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {data.properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default FeaturedProperties;