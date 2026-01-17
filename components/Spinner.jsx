// components/Spinner.jsx
'use client';

const Spinner = ({ loading }) => {
  return (
    loading && (
      <div className='flex justify-center items-center h-screen'>
        <div className='spinner'></div>
      </div>
    )
  );
};

export default Spinner;
