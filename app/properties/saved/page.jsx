// app/properties/saved/page.jsx
import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

const SavedPropertiesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const user = await User.findById(userId).populate('bookmarks');

  const bookmarks = user.bookmarks;

  return (
    <section className='px-4 py-12 bg-gray-50 min-h-screen'>
      <div className='container lg:container m-auto px-4 py-6'>
        <h1 className='text-3xl font-bold mb-6 text-blue-600'>
          Saved Properties
        </h1>
        {bookmarks.length === 0 ? (
          <p className='text-gray-600 text-xl'>No saved properties</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
