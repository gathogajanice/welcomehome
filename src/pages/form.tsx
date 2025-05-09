import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const FormPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
      <div className="min-h-screen bg-[#387f79] flex items-center justify-center px-4 py-10 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/bg-img.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
            mixBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 w-full max-w-2xl">
          <iframe
            src="https://www.powr.io/form-builder/i/39548157#page"
            title="Welcome Home Form"
            className="w-full h-[800px] border-0 rounded-xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormPage;
