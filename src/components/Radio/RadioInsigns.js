import React from 'react';

const RadioOption = ({ name, imageSrc, color }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={name}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <img
        src={imageSrc}
        alt={name}
        className={`w-24 h-24 p-4 bg-white shadow-md rounded-md cursor-pointer transition-transform duration-200 ${isChecked ? `border-4 border-${color}` : ''}`}
      />
    </div>
  );
};

const RadioGroup = ({ options }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <RadioOption key={option.name} {...option} />
      ))}
    </div>
  );
};

export default RadioGroup;
