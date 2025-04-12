
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with dark background */}
      <div className="relative h-screen bg-neutral-800">
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
