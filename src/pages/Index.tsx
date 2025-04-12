
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocationsSection from "@/components/LocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero slider positioned behind the navbar */}
      <Hero />
      
      {/* Navbar - fixed position on top of hero */}
      <Navbar />
      
      {/* Main content */}
      <div className="relative z-10 mt-[100vh]">
        <LocationsSection />
      </div>
    </div>
  );
};

export default Index;
