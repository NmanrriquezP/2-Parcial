import React from 'react';

interface DescriptionFooterProps {
  description: string;
  lastUpdated: string;
}

const DescriptionFooter: React.FC<DescriptionFooterProps> = ({ description, lastUpdated }) => {
  return (
    <div className="bg-white p-3 rounded-b-lg shadow">
      <p className="text-gray-700 text-sm mb-2">{description}</p>
      <div className="border-t pt-2 text-xs text-gray-500 flex justify-between">
        <span>Last Updated</span>
        <span>{lastUpdated}</span>
      </div>
    </div>
  );
};

export default DescriptionFooter;
