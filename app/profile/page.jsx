// app/profile/page.jsx
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import ProfileProperties from '@/components/ProfileProperties';
import Image from 'next/image';
import { convertToSerializeableObject } from '@/utils/convertToObject';

const ProfilePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  if (!userId) {
    throw new Error('User ID is required');
  }

  const propertiesDocs = await Property.find({ owner: userId }).lean();
  const properties = propertiesDocs.map(convertToSerializeableObject);

  return (
    <section className='bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen'>
      <div className='container m-auto py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-lg rounded-lg border border-gray-200 m-4 md:m-0'>
          <h1 className='text-4xl font-bold mb-6 text-center text-blue-600'>
            Your Profile
          </h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <Image
              className='h-32 w-32 md:h-48 md:w-48 rounded-full object-cover border-4 border-blue-600'
              src={sessionUser.user.image}
              width={200}
              height={200}
              alt='User'
            />
            <div className='text-center md:text-left'>
              <h2 className='text-3xl mb-2'>{sessionUser.user.name}</h2>
              <p className='text-gray-600 text-lg'>{sessionUser.user.email}</p>
            </div>
          </div>
        </div>

        <div className='bg-white px-6 py-8 shadow-lg rounded-lg border border-gray-200 mt-6 m-4 md:m-0'>
          <h2 className='text-3xl font-bold mb-6 text-purple-600'>
            Your Listings
          </h2>
          <ProfileProperties properties={properties} />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;