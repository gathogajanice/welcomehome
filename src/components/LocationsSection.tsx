
import React from 'react';
import LocationCard from './LocationCard';

// Example location data
const locations = [
  {
    time: "25",
    unit: "MIN DRIVE BY CAR",
    label: "Malaga Train Station "Maria Zambrano"",
    image: "https://images.unsplash.com/photo-1529148892821-090a35aec6ab?q=80&w=1324&auto=format&fit=crop"
  },
  {
    time: "10",
    unit: "MIN DRIVE BY CAR",
    label: "Playa De Carvajal",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1740&auto=format&fit=crop"
  },
  {
    time: "15",
    unit: "MIN DRIVE BY CAR",
    label: "Golf Torrequebrada",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1740&auto=format&fit=crop"
  },
  {
    time: "10",
    unit: "MIN DRIVE BY CAR",
    label: "QuironSalud Fuengirola",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1753&auto=format&fit=crop"
  },
  {
    time: "5",
    unit: "MIN DRIVE BY CAR",
    label: "Local Artisan Market",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=1374&auto=format&fit=crop"
  }
];

const LocationsSection = () => {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-canela mb-3">Nearby Attractions</h2>
        <p className="text-gray-600">Discover what's in the neighborhood</p>
      </div>
      
      <div className="w-full overflow-x-auto scrollbar-none pb-4">
        <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-8">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              time={location.time}
              unit={location.unit}
              label={location.label}
              image={location.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
