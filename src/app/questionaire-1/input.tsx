import React, { useState } from 'react';
import { Search } from 'lucide-react';

const DestinationSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative w-[362px] md:hidden">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-[52px] pl-12 pr-4 py-4 bg-white rounded-3xl shadow text-sm text-[#646d80] font-normal font-['SF Pro'] leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          isFocused || inputValue ? 'text-left' : 'text-center'
        }`}
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Search className="w-5 h-5 text-[#646d80]" />
      </div>
      {!isFocused && !inputValue && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm text-[#646d80] font-normal font-['SF Pro'] leading-tight">
            Find your Destination...
          </span>
        </div>
      )}
    </div>
  );
};

export default DestinationSearchInput;