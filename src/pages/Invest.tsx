
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wallet, Plane } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Browse & Invest",
    description: "Purchase fractional land ownership with ease through our intuitive platform.",
    image: "/lovable-uploads/293a4382-83c2-4670-bd8e-d9931606822b.png",
    icon: <Home className="h-6 w-6 text-[#387f79]" />
  },
  {
    number: "02",
    title: "Secure Transactions",
    description: "All transactions are verified via blockchain & smart contracts for maximum security.",
    image: "/lovable-uploads/c8f858fb-5926-49f2-b059-2d25cc0e4187.png",
    icon: <Wallet className="h-6 w-6 text-[#387f79]" />
  },
  {
    number: "03",
    title: "Earn & Travel",
    description: "Membership unlocks luxury stays in Africa, combining investment with unforgettable experiences.",
    image: "/lovable-uploads/4566365b-edc6-4515-b315-d227161fd149.png",
    icon: <Plane className="h-6 w-6 text-[#387f79]" />
  }
];

const Invest = () => {
  // Preload images
  useEffect(() => {
    features.forEach(feature => {
      const img = new Image();
      img.src = feature.image;
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#f9f8f3] py-24">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-cormorant font-bold mb-16"
        >
          Simple, <span className="text-[#387f79]">Secure</span>, Smart<br />
          Transactions
        </motion.h1>
        
        <div className="space-y-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
            >
              <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-center items-start text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-6xl font-light text-[#387f79] font-bricolage">
                          {feature.number}
                        </span>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bricolage font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 font-bricolage text-sm">{feature.description}</p>
                    </div>
                    <div className="bg-gray-100 min-h-[250px] md:min-h-[300px]">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Invest;
