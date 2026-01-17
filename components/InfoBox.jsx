// components/InfoBox.jsx
import Link from 'next/link';

const InfoBox = ({
  heading,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-8 rounded-lg shadow-lg`}>
      <h2 className={`${textColor} text-3xl font-bold mb-4`}>{heading}</h2>
      <p className={`${textColor} mb-6 text-lg`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-6 py-3 hover:shadow-lg transition duration-300 font-semibold`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
