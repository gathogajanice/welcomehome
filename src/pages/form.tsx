import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const FormPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when the form page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add event listener for form submission
    const handleFormSubmit = (event: MessageEvent) => {
      if (event.data && event.data.type === 'powr-form-submit') {
        // Redirect to home page after form submission
        setTimeout(() => navigate('/'), 2000);
      }
    };

    window.addEventListener('message', handleFormSubmit);
    return () => window.removeEventListener('message', handleFormSubmit);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#387f79] flex flex-col items-center px-4 pt-4 pb-10 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/bg-img.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
            mixBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 w-full max-w-2xl">
          {isLoading && (
            <div className="w-full min-h-[400px] flex items-center justify-center bg-white/10 rounded-xl shadow-lg">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="font-bd-sans">Loading form...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://www.powr.io/form-builder/i/39548157#page"
            title="Welcome Home Form"
            className={`w-full border-0 rounded-xl shadow-lg ${isLoading ? 'hidden' : 'block'}`}
            style={{ minHeight: '900px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsLoading(false)}
            loading="eager"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormPage;
