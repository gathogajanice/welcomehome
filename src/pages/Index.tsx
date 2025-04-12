
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero slider positioned behind the navbar */}
      <Hero />
      
      {/* Navbar - fixed position on top of hero */}
      <Navbar />
    </div>
  );
};

export default Index;
