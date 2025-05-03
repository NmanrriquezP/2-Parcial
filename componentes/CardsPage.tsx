import React from 'react';
import Card from '../componentes/Card';

const CardsPage = () => {
  const cardsData = [
    {
      number: 1,
      title: 'Agenda/Topic',
      code: 'SAAS-0000',
      icon: '/Jira.png',  
      description: 'Description of what is done here',
      lastUpdated: '3/8/2020',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-wrap gap-6 justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsPage;
