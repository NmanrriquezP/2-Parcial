import React from 'react';

interface Frame270Props {
  number: number;
  topic: string;
  code: string;
  iconUrl: string;
}

const Frame270: React.FC<Frame270Props> = ({ number, topic, code, iconUrl }) => {
  return (
    <div className="flex items-center justify-between bg-purple-500 text-white rounded-lg p-4 w-full max-w-md shadow-md">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
          <span className="text-sm">{number}</span>
        </div>
        <span className="text-lg font-medium">{topic}</span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold">{code}</span>
        <img src={iconUrl} alt="Icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Frame270;
