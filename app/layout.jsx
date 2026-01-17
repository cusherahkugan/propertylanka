// app/layout.jsx
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'PropertyLanka | Find Your Perfect Rental',
  description: 'Find your dream rental property in Sri Lanka',
  keywords: 'rental, property, real estate, Sri Lanka, apartments, houses',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;