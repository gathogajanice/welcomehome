
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cards = [
  {
    id: 1,
    number: "01",
    heading: "Browse & Invest",
    subheading: "Purchase fractional land ownership",
    description: "Discover affordable land investment opportunities starting at $50.",
    image: "/lovable-uploads/192f0284-ce72-4c13-aa31-90b6a71b8152.png"
  },
  {
    id: 2,
    number: "02",
    heading: "Secure Transactions",
    subheading: "Verified via smart contracts",
    description: "Every deal is blockchain-backed for your peace of mind.",
    image: "/lovable-uploads/cbae74d9-9537-4991-a534-c6cc8de0641f.png"
  },
  {
    id: 3,
    number: "03",
    heading: "Earn & Travel",
    subheading: "Membership perks included",
    description: "Unlock free stays in premium African destinations.",
    image: "/lovable-uploads/fc9b9fc7-b84e-4db1-86f0-804ae74f3278.png"
  },
  {
    id: 4,
    number: "04",
    heading: "Real Ownership",
    subheading: "Title-deed included",
    description: "Get legal co-ownership with every land investment.",
    image: "/lovable-uploads/dd0611ca-5bcd-4971-ba11-363baf42026a.png"
  },
  {
    id: 5,
    number: "05",
    heading: "Community First",
    subheading: "Built for locals, by locals",
    description: "Join a growing network of impact-driven African investors.",
    image: "/lovable-uploads/0ba03bf7-67e6-4a4e-a18c-5c4890729a57.png"
  }
];

const Invest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#f8f6f2] py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-clash mb-16">
          How We <span className="text-[#6DD6DB]">Simplify</span> Your<br />
          Investment Experience
        </h1>
        
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px]">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white hover:bg-[#6DD6DB]/10 border border-gray-200"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white hover:bg-[#6DD6DB]/10 border border-gray-200"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Stacked Cards */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
              {cards.map((card, index) => {
                const isActive = index === currentIndex;
                const distance = (index - currentIndex + cards.length) % cards.length;
                
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ 
                      scale: 0.8, 
                      opacity: 0,
                      y: 30,
                      zIndex: index 
                    }}
                    animate={{ 
                      scale: isActive ? 1 : 0.9 - (distance * 0.05),
                      opacity: isActive ? 1 : 0.7 - (distance * 0.15),
                      y: isActive ? 0 : 20 + (distance * 10),
                      zIndex: cards.length - distance,
                      x: isActive ? 0 : distance > cards.length / 2 ? (distance - cards.length) * 10 : distance * -10
                    }}
                    exit={{ 
                      scale: 0.8, 
                      opacity: 0,
                      y: 30 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      opacity: { duration: 0.2 } 
                    }}
                    onClick={() => handleCardClick(index)}
                    className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer ${isActive ? 'shadow-xl' : 'shadow-md'}`}
                    style={{
                      transformOrigin: 'center bottom',
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <div className="grid md:grid-cols-2 h-full">
                        <div className="p-8 flex flex-col justify-center items-start text-left">
                          <span className="text-7xl font-light text-[#6DD6DB] mb-4">
                            {card.number}
                          </span>
                          <h3 className="text-3xl font-clash mb-2">{card.heading}</h3>
                          <h4 className="text-lg font-medium text-gray-700 mb-4">{card.subheading}</h4>
                          <p className="text-gray-600">{card.description}</p>
                        </div>
                        <div className="bg-gray-100 h-full">
                          <img 
                            src={card.image}
                            alt={card.heading}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#6DD6DB] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
