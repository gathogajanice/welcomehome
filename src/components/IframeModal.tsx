import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const IframeModal: React.FC<IframeModalProps> = ({ isOpen, onClose, url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-[#387f79] z-50 flex items-center justify-center px-4 pt-4 pb-10">
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
              <p className="font-bd-sans">Loading...</p>
            </div>
          </div>
        )}
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
          >
            <X size={24} />
          </button>
          <iframe
            src={url}
            title={title || "Modal Content"}
            className={`w-full border-0 rounded-xl shadow-lg ${isLoading ? 'hidden' : 'block'}`}
            style={{ minHeight: '900px' }}
            onLoad={() => setIsLoading(false)}
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default IframeModal; 