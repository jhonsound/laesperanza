import React, { useEffect, useState } from 'react';
import Adventurers from '../../assets/logoClans/adventurs.jpg';
import Jetsetters from '../../assets/logoClans/jetsetters.jpg';
import Pilgrims from '../../assets/logoClans/pilgrims.jpg';
import Wanderers from '../../assets/logoClans/wainderes.jpg';
import Visitors from '../../assets/logoClans/visitoors.jpg';
import Walkers from '../../assets/logoClans/walkers.jpg';
import Nomads from '../../assets/logoClans/Nomads.jpg';
import Deambulators from '../../assets/logoClans/deambularos.jpg';

export const getLogoClan = name => {
  switch (name) {
    case 'Visitors':
      return Visitors;
    case 'Nomads':
      return Nomads;
    case 'Adventurers':
      return Adventurers;
    case 'Jetsetters':
      return Jetsetters;
    case 'Pilgrims':
      return Pilgrims;
    case 'Walkers':
      return Walkers;
    case 'Wanderers':
      return Wanderers;
    case 'Deambulators':
      return Deambulators;
    default:
      break;
  }
};

const CustomSelect = React.forwardRef(({ label, options, name, value, onChange, setSelectedClan }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setSelectedClan(option.id);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          <img src={getLogoClan(selectedOption?.name)} alt={selectedOption?.name} className="w-5 h-5 mr-2" />
          <span>{selectedOption?.name || 'Seleccionar...'}</span>
        </div>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map(option => (
            <div
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-center">
                <img src={getLogoClan(option.name)} alt={option.name} className="w-5 h-5 mr-2" />
                <span>{option.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const renderInputField = (type, id, label, register, errors, defaultValue, options = [], setSelectedClan) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'password':
      return (
        <div className="mb-4" key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            type={type}
            id={id}
            className="mt-1 block w-full px-3 py-2 border border-sky-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={label}
            defaultValue={defaultValue}
            {...register(id, { required: `${label} es requerido` })}
          />
          {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
        </div>
      );

    case 'select':
      return (
        <div className="mb-4" key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <CustomSelect
            label={label}
            options={options}
            name={id}
            setSelectedClan={setSelectedClan}
            ref={register(id)}
            value={options.find(option => option.id === defaultValue)}
            onChange={option => register(id).onChange({ target: { value: option.id } })}
          />
          {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
        </div>
      );

    case 'select-multiple':
      return (
        <div className="mb-4" key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <select
            id={id}
            multiple
            className="mt-1 block w-full px-3 py-2 border border-sky-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue={defaultValue}
            {...register(id, { required: `${label} es requerido` })}
          >
            {options.map(option => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
        </div>
      );

    default:
      return null;
  }
};

export const Form = ({
  onSubmit,
  error: apiError,
  errors,
  handleSubmit,
  register,
  formFields = [],
  setSelectedClan,
  user,
}) => {
  return (
    <div>
      {apiError && <p className="text-red-500">{apiError.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map(({ type, id, label, options, defaultValue }) =>
          renderInputField(type, id, label, register, errors, defaultValue, options, setSelectedClan),
        )}
        <div className="flex justify-end">
          {user?.rol?.name === "teacher" ? (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Enviar
            </button>
          ): null}
        </div>
      </form>
    </div>
  );
};
