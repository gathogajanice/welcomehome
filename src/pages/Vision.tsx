import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe2, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section className="bg-[#efede7] py-16 relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 max-w-7xl">
        {/* Title at the top */}
        <motion.h1 
          className="font-troye-sans text-2xl md:text-[1.8rem] lg:text-[2rem] leading-tight mb-12 text-[#00634d] max-w-4xl text-left pl-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SCALING ACROSS AFRICA. EMPOWERING A NEW GENERATION OF OWNERS.<br />
          REDEFINING WEALTH FOR THE DIASPORA.
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
                <p className="font-cormorant text-lg text-left">
                  Welcome Home is more than a platform – it's a movement.
                </p>
                <p className="font-cormorant text-lg text-left">
                  By <strong>2027</strong>, we aim to expand into <strong>10+ African countries</strong>, tokenize <strong>$100M</strong> in real estate assets, and welcome <strong>10,000 global investors</strong> into a connected ownership ecosystem.
                </p>
                <p className="font-cormorant text-lg text-left">
                  Every parcel acquired, every journey taken, and every community built helps shape a new story of <strong>wealth</strong>, <strong>freedom</strong>, and <strong>belonging</strong>.
                </p>
                <p className="font-cormorant text-lg text-left">
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
                  <p className="font-cormorant text-lg">
                    <strong>2025</strong> | Launch Senegal
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-[#387f79]" />
                  <p className="font-cormorant text-lg">
                    <strong>2026</strong> | Expansion to Ghana and Kenya
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#387f79]" />
                  <p className="font-cormorant text-lg text-left">
                    <strong>2027</strong> | <strong>10,000+</strong> Investors, <strong>$100M+</strong> Assets Tokenized
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
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
