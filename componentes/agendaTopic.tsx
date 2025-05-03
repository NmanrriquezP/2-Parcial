import React from 'react';

interface AgendaTopicProps {
  number: number;
  title: string;
  code: string;
  icon: string; // URL o nombre de ícono en /public
}

const AgendaTopic: React.FC<AgendaTopicProps> = ({ number, title, code, icon }) => {
  return (
    <div className="flex items-center justify-between bg-purple-500 text-white p-3 rounded-t-lg relative">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center border border-white rounded-full text-sm">
          {number}
        </div>
        <span className="text-sm">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">{code}</span>
        <img src={icon} alt="icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default AgendaTopic;
