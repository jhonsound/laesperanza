import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function HeaderStats({
  title = 'Title',
  onBack = '#',
  bgColor = 'bg-gray-400',
  color = 'text-gray-400',
  extra = null,
}) {
  const history = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      history('/');
    }
  };

  return (
    <div
      className={`relative w-auto rounded-lg px-2 border-1 border-emerald-500 shadow-lg ${bgColor} ${color} py-4`}
    >
      <div className="flex px-4 w-full md:w-3/4 lg:w-full xl:w-1/2" style={{ width: '100%' }}>
        {onBack !== '#' && (
          <button onClick={handleBack} className="text-xl text-white mr-4">
            <FaArrowLeft />
          </button>
        )}
        <h1 className="text-2xl text-white font-bold w-full">{title}</h1>
        {extra && extra()}
      </div>
    </div>
  );
}
