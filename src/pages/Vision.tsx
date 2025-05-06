import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe2, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section className="bg-[#efede7] py-16 relative overflow-hidden">
      {/* Removed container to make background visible behind the image */}

      <div className="container mx-auto px-8 md:px-24 lg:px-[90px] max-w-[1800px]">
        {/* Title at the top */}
        <motion.h1 
          className="font-troye text-2xl md:text-3xl lg:text-4xl leading-tight mb-12 text-[#00634d] max-w-[1100px] text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SCALING ACROSS AFRICA. EMPOWERING A NEW GENERATION OF OWNERS. REDEFINING WEALTH FOR THE DIASPORA.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left side - Text content */}
          <motion.div 
            className="text-[#032b22] space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="font-bd-sans text-xl text-[#387f79] text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <strong>Our Vision for 2025 – 2027:</strong><br />
                <strong>Building Legacy, Creating Opportunity</strong>
              </motion.h2>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="font-cormorant text-lg text-left font-normal">
                  Welcome Home is more than a platform – it's a movement.
                </p>
                <p className="font-cormorant text-lg text-left font-normal">
                  By 2027, we aim to expand into 10+ African countries, tokenize $100M in real estate assets, and welcome 10,000 global investors into a connected ownership ecosystem.
                </p>
                <p className="font-cormorant text-lg text-left font-normal">
                  Every parcel acquired, every journey taken, and every community built helps shape a new story of wealth, freedom, and belonging.
                </p>
                <p className="font-cormorant text-lg text-left font-normal">
                  Now is your time to own a piece of it.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                className="space-y-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-[#387f79]" />
                  <p className="font-cormorant text-lg font-normal">
                    2025 | Launch Senegal
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-[#387f79]" />
                  <p className="font-cormorant text-lg font-normal">
                    2026 | Expansion to Ghana and Kenya
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#387f79]" />
                  <p className="font-cormorant text-lg text-left font-normal">
                    2027 | 10,000+ Investors, $100M+ Assets Tokenized
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <img
            src="/lovable-uploads/cultural-women.png"
            alt="Cultural women"
            className="max-w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[500px] w-auto object-contain"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
