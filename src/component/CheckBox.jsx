import React, { useState } from 'react';

const PasswordOptionsForm = (props) => {
  // State to manage checkbox options
  const [options, setOptions] = useState({
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (optionName) => {
    setOptions((prevOptions) => ({
        ...prevOptions,[optionName]: !prevOptions[optionName],
    }));
  };

 const Clicked = (optionName) => {
    props.active(options)
 }


//   const handleCheckboxChange = (optionName) => {
//     setOptions((prevOptions) => ({
//       ...prevOptions,
//       [optionName]: !prevOptions[optionName],
//     }));
//   };

  return (
    <div className='p-3'>
      <form>
        <label>
          <input
            type="checkbox"
            checked={options.includeUpperCase}
            onChange={() => handleCheckboxChange('includeUpperCase')}
          />
          Include upper case
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={options.includeLowerCase}
            onChange={() => handleCheckboxChange('includeLowerCase')}
          />
          Include lower case
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={options.includeNumbers}
            onChange={() => handleCheckboxChange('includeNumbers')}
          />
          Include numbers
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={options.includeSymbols}
            onChange={() => handleCheckboxChange('includeSymbols')}
          />
          Include symbols
        </label>
        <br />
      </form>
    <button className='bg-sky-800 text-neutral-100 w-full h-10 rounded-sm' onClick={Clicked}>Generator</button>
      
    </div>
  );
};

export default PasswordOptionsForm;
