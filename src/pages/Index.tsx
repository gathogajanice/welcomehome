
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
        
        {/* Empty space below navbar - no content as per request */}
        <div className="relative z-10 h-full">
          {/* This space intentionally left empty as requested */}
        </div>
      </div>
    </div>
  );
};

export default Index;
