import React from 'react';
import Image from 'next/image';

interface CardProps {
  number: number;
  title: string;
  code: string;
  icon: string;
  description: string;
  lastUpdated: string;
}

const Card: React.FC<CardProps> = ({ number, title, code, icon, description, lastUpdated }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden border"
      style={{ width: '364px', height: '165px' }}
    >
      {/* Header */}
      <div className="bg-purple-500 text-white flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center border border-white rounded-full text-xs">
            {number}
          </div>
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{code}</span>
          <Image src={icon} alt="Card Icon" width={30} height={30} />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-2 h-[84px] flex items-center">
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: '#2F2F2F',
            lineHeight: '1',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t px-4 py-1 flex justify-between">
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: '#888888',
            lineHeight: '1',
          }}
        >
          Last Updated
        </span>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: '#888888',
            lineHeight: '1',
          }}
        >
          {lastUpdated}
        </span>
      </div>
    </div>
  );
};

export default Card;
