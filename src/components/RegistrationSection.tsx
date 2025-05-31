import React, { useState, useRef, useEffect } from 'react';
import { User, Phone, Mail, GraduationCap, School, CreditCard, Building2, ChevronDown } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  degree: string;
  college_university: string;
  student_id: string;
  membership_type: string;
  institution_name: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const currentLabel = options.find(opt => opt.value === value)?.label || 'Select an option';

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full px-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 text-left focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 hover:border-[#78BE20]/50 transition-colors flex items-center justify-between"
      >
        <span>{currentLabel}</span>
        <ChevronDown 
          className={`h-5 w-5 text-[#78BE20] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-[#78BE20]/30 rounded-lg shadow-lg z-10"
        >
          {options.map((option) => (
            <div
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-3 cursor-pointer text-gray-300 hover:bg-[#78BE20]/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                option.value === value 
                  ? 'bg-[#78BE20]/10 text-[#78BE20]' 
                  : 'hover:text-white'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RegistrationSectionIV: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    degree: '',
    college_university: '',
    student_id: '',
    membership_type: '',
    institution_name: '',
  });

  const [membershipStatus, setMembershipStatus] = useState<string>('');

  const membershipOptions = [
    { value: 'Non-SPS', label: 'Non-SPS Member' },
    { value: 'SPS', label: 'SPS Member' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      membership_type: membershipStatus,
    };
    console.log('Form submitted:', dataToSubmit);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#78BE20]">Registration Section IV</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              placeholder="Degree"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="text"
              name="college_university"
              value={formData.college_university}
              onChange={handleInputChange}
              placeholder="College/University"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="text"
              name="student_id"
              value={formData.student_id}
              onChange={handleInputChange}
              placeholder="Student ID"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Membership Status</label>
            <CustomDropdown
              value={membershipStatus}
              onChange={setMembershipStatus}
              options={membershipOptions}
            />
          </div>

          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
            <input
              type="text"
              name="institution_name"
              value={formData.institution_name}
              onChange={handleInputChange}
              placeholder="Institution Name"
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#78BE20] text-black font-semibold rounded-lg hover:bg-[#78BE20]/80 transition-colors"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationSectionIV;