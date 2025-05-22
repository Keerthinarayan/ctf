import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface RegistrationPopupProps {
  type: 'success' | 'error';
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationPopup: React.FC<RegistrationPopupProps> = ({ type, message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl relative z-10 max-w-md w-full mx-4">
        <div className="flex items-center justify-center mb-4">
          {type === 'success' ? (
            <CheckCircle className="h-12 w-12 text-green-500" />
          ) : (
            <XCircle className="h-12 w-12 text-red-500" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-center mb-4 text-white">
          {type === 'success' ? 'Registration Successful!' : 'Registration Failed'}
        </h3>
        <p className="text-gray-300 text-center mb-6">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
