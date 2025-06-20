import React from 'react';
import SiteCard from './SiteCard';

const heritageData = [
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
      title: "Taj Mahal",
    description: "An ivory-white marble mausoleum in Agra, a symbol of eternal love."
  },
  {
    image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hawa Mahal",
    description: "The Palace of Winds in Jaipur, known for its unique architecture."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1694475136007-14c4dbf484f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    title: "Sun Temple",
    description: "A 13th-century temple in Odisha, a UNESCO World Heritage Site."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1iZXIlMjBmb3J0fGVufDB8fDB8fHww",
    title: "Amber Fort",
    description: "A 13th-century temple in Odisha, a UNESCO World Heritage Site."
  }
];

const CardSection = () => {
    
  return (
    <div className='pb-10 pt-1 bg-orange-50 '>
        <h2 className='text-3xl  font-bold text-center bg-amber-100 w-full border-2 border-amber-300 shadow-2xs text-orange-800 font-serif'>Discover Heritage Sites</h2>
        <div className='grid gap-8 sm:grid-cols-4 md:grid-cols-4 place-items-center p-2'>
           {heritageData.map((site, index) => (
          <SiteCard
            key={index}
            image={site.image}
            title={site.title}
            description={site.description}/>
            ))}
        </div>
    </div>
  );
};

export default CardSection;