import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe2, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section className="bg-[#efede7] py-16 relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        {/* Title at the top */}
        <motion.h1 
          className="font-bd-sans text-2xl md:text-3xl leading-tight mb-12 text-[#032b22] max-w-2xl text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <div>
  <p>
    SCALING ACROSS <span className="font-bold">AFRICA</span>. EMPOWERING A <span className="font-bold">NEW GENERATION</span>
  </p>
  <p>
    OF OWNERS. <span className="font-bold">REDEFINING WEALTH</span> FOR THE DIASPORA.
  </p>
</div>
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
                className="font-troye text-xl text-[#387f79] text-left"
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
                <p className="font-bd-sans text-base text-left">
                  Welcome Home is more than a platform – it's a movement.
                </p>
                <p className="font-bd-sans text-base text-left">
                  By 2027, we aim to expand into 10+ African countries, tokenize $100M in real estate assets, and welcome 10,000 global investors into a connected ownership ecosystem.
                </p>
                <p className="font-bd-sans text-base text-left">
                  Every parcel acquired, every journey taken, and every community built helps shape a new story of wealth, freedom, and belonging.
                </p>
                <p className="font-bd-sans text-base text-left">
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
                  <p className="font-bd-sans text-base">
                    2025 | Launch Senegal
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-[#387f79]" />
                  <p className="font-bd-sans text-base">
                    2026 | Expansion to Ghana and Kenya
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#387f79]" />
                  <p className="font-bd-sans text-base text-left">
                    2027 | 10,000+ Investors, $100M+ Assets Tokenized
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="/lovable-uploads/cultural women.png"
              alt="Cultural women in traditional attire"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision; 