
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with background image */}
      <div className="relative h-screen">
        {/* Background image */}
        <div className="absolute inset-0 bg-neutral-800">
          <img 
            src="/lovable-uploads/8dfa03f2-d550-43a3-b63a-193d22268c99.png" 
            alt="Horizonte luxury residential project" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main hero content */}
        <div className="relative z-10 h-full flex flex-col pt-32 px-8 md:px-12">
          {/* Horizonte large text */}
          <div className="text-white text-[180px] leading-none font-thin tracking-wide">
            <h1 className="m-0 p-0">HORIZONTE</h1>
          </div>
          
          {/* Welcome text */}
          <div className="max-w-md mt-auto mb-32 text-white">
            <p className="text-xl font-light leading-relaxed">
              Welcome to "Horizonte," a prestigious residential project that sets a new standard in luxury living along the Costa del Sol.
            </p>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs tracking-widest opacity-80">
            SCROLL DOWN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
