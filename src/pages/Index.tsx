
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Investment Platform</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the future of investing with our comprehensive platform designed to help you grow your wealth sustainably.
          </p>
          <button className="bg-[#898684] text-white font-bold rounded-lg px-8 py-3 hover:bg-opacity-90 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
