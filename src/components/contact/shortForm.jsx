import React, { useState } from 'react';
import submitForm from './functions/formSubmission';
import './style.css';
import CountryCodes from './components/countryCodes'
const ShortForm = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [inputValue, setInputValue] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async () => {
    try {
      setLoading(true); // Start loading

      console.log(selectedOption);
      console.log(inputValue);
      console.log(countryCode);

      const success = await submitForm(selectedOption, inputValue, countryCode);

      if (success) {
        console.log("a success");
        setSubmissionStatus('success');
        setInputValue('');
        setCountryCode('+1');
      } else {
        setSubmissionStatus('error');
      }
    } catch (err) {
      if (err.message === 'empty') {
        setSubmissionStatus('empty');
      } else {
        setSubmissionStatus('error');
      }
    } finally {
      setLoading(false); // Stop loading
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  return (
    <div className="md:w-full max-w-md mx-auto">
      <p className="text-lg font-bold mb-2">Hate Forms?</p>
      <p className="text-base font-semibold mb-2">Drop your Email or Number. Our team will reach out to you.</p>
      <div className="flex mb-4">
        <button
          className={`flex-1 border border-gray-300 rounded-l p-2 focus:outline-none ${selectedOption === 'email' ? 'bg-blue-200' : ''}`}
          onClick={() => handleOptionSelect('email')}
        >
          Email
        </button>
        <button
          className={`flex-1 border border-gray-300 rounded-r p-2 focus:outline-none ${selectedOption === 'mobile' ? 'bg-blue-200' : ''}`}
          onClick={() => handleOptionSelect('mobile')}
        >
          Mobile
        </button>
      </div>
      {selectedOption === 'email' && (
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
      )}
      {selectedOption === 'mobile' && (
        <div className="flex mb-4 w-full">
          <select
            className="border border-gray-300 rounded-l py-2 focus:outline-none"
            value={countryCode}
            onChange={handleCountryCodeChange}
          >
            <CountryCodes />
          </select>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="flex-1 border border-gray-300 rounded-r px-4 py-2 ml-1 focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600 transition-colors duration-300"
        disabled={loading} // Disable button when loading
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {submissionStatus === 'success' && (
        <p className="text-green-900 mt-2">Form submitted successfully! Our team will reach out to you.</p>
      )}
      {submissionStatus === 'error' && (
        <p className="text-red-500 mt-2">Something went wrong. Please try again later.</p>
      )}
      {submissionStatus === 'empty' && (
        <p className="text-red-500 mt-2">Please fill out the form before submitting.</p>
      )}

    </div>
  );
};

export default ShortForm;
