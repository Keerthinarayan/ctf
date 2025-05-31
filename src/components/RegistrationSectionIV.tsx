import React, { useState } from 'react';
import { User, Phone, Mail, GraduationCap, School, CreditCard, Building2 } from 'lucide-react';
import { supabaseClient } from '../services/supabaseClient';
import RegistrationPopup from './RegistrationPopup';

const RegistrationSectionIV: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('Non-SPS');
  const [membershipId, setMembershipId] = useState('');
  const [membershipIdError, setMembershipIdError] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [utrError, setUtrError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getFee = () => {
    return membershipStatus === 'SPS' ? 0 : 200;
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    setPhone(digitsOnly);
    if (digitsOnly.length > 0 && digitsOnly.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
    } else {
      setPhoneError('');
    }
  };

  const handleUtrChange = (value: string) => {
    const alphanumericOnly = value.replace(/[^a-zA-Z0-9]/g, '');
    setUtrNumber(alphanumericOnly);
    if (alphanumericOnly.length > 0 && alphanumericOnly.length !== 12) {
      setUtrError('UTR number must be exactly 12 characters');
    } else {
      setUtrError('');
    }
  };

  const handleMembershipIdChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    setMembershipId(digitsOnly);
    if (digitsOnly.length > 0 && digitsOnly.length !== 8) {
      setMembershipIdError('IEEE SPS Membership ID must be exactly 8 digits');
    } else {
      setMembershipIdError('');
    }
  };

  const validateForm = () => {
    // Check for errors
    if (phoneError || utrError || membershipIdError) return false;
    
    // Name: max 30 characters
    if (name.length > 30) {
      setSubmitStatus({ type: 'error', message: 'Name must not exceed 30 characters.' });
      return false;
    }
    
    // Email: max 50 characters and contains '@'
    if (email.length > 50 || !email.includes('@')) {
      setSubmitStatus({ type: 'error', message: 'Email must be valid and not exceed 50 characters.' });
      return false;
    }
    
    // Phone: exactly 10 digits
    if (phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }
    
    // Semester: 1-8
    const sem = parseInt(semester, 10);
    if (isNaN(sem) || sem < 1 || sem > 8) {
      setSubmitStatus({ type: 'error', message: 'Semester must be between 1 and 8.' });
      return false;
    }
      // Branch: max 30 characters
    if (branch.length > 30) {
      setSubmitStatus({ type: 'error', message: 'Branch must not exceed 30 characters.' });
      return false;
    }

    // College Name: required and max 100 characters
    if (collegeName.trim() === '') {
      setSubmitStatus({ type: 'error', message: 'College name is required.' });
      return false;
    }
    if (collegeName.length > 100) {
      setSubmitStatus({ type: 'error', message: 'College name must not exceed 100 characters.' });
      return false;
    }
    
    // Membership constraints
    if (membershipStatus === 'SPS') {
      if (membershipId.length !== 8) {
        setMembershipIdError('IEEE SPS Membership ID must be exactly 8 digits');
        return false;
      }
    } else if (membershipStatus === 'Non-SPS') {
      if (utrNumber.length !== 12) {
        setUtrError('UTR number must be exactly 12 characters');
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      if (!submitStatus) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Please correct the errors in the form.' 
        });
        setIsPopupOpen(true);
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);    const data = {
      name,
      email,
      phone_number: phone,
      semester: parseInt(semester, 10),
      branch,
      college_name: collegeName,
      membership_type: membershipStatus,
      membership_id: membershipStatus === 'SPS' ? membershipId : null,
      utr_number: membershipStatus === 'Non-SPS' ? utrNumber : null,
    };

    try {
      const { error } = await supabaseClient.from('visit_registrations').insert([data]);
      if (error) throw error;
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Registration submitted successfully!' 
      });
      setIsPopupOpen(true);

      // Reset form
      setName('');      setEmail('');
      setPhone('');
      setSemester('');
      setBranch('');
      setCollegeName('');
      setMembershipStatus('Non-SPS');
      setMembershipId('');
      setUtrNumber('');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit registration. Please try again.' 
      });
      setIsPopupOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register-iv" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register for{" "}
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Industrial Visit
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the industrial visit and explore new opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={30}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={50}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                    maxLength={10}
                    className={`w-full pl-10 pr-4 py-2 bg-slate-900/50 border ${
                      phoneError ? 'border-red-500' : 'border-[#78BE20]/30'
                    } rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                </div>
              </div>
            </div>

            {/* Academic Details Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Academic Details</h3>              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter college name"
                  />
                </div>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter semester (1-8)"
                  />
                </div>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    required
                    maxLength={30}
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter your branch"
                  />
                </div>
              </div>
            </div>

            {/* IEEE SPS Membership Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">IEEE SPS Membership</h3>
              <div className="space-y-6">
                {/* Dropdown */}
                <div className="relative">
                  <select
                    value={membershipStatus}
                    onChange={(e) => setMembershipStatus(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg text-gray-300 appearance-none focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50 hover:border-[#78BE20]/50 transition-colors "
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2378BE20' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.25rem 1.25rem'
                    }}
                  >
                    <option value="Non-SPS" className="bg-slate-900 text-gray-300">Non-SPS Member</option>
                    <option value="SPS" className="bg-slate-900 text-gray-300">SPS Member</option>
                  </select>
                  
                </div>

                {/* Conditional input */}
                {membershipStatus === 'SPS' && (
                  <div className="relative">
                    <input
                      type="text"
                      value={membershipId}
                      onChange={(e) => handleMembershipIdChange(e.target.value)}
                      required
                      maxLength={8}
                      className={`w-full px-4 py-3 bg-slate-900/50 border ${
                        membershipIdError ? 'border-red-500' : 'border-[#78BE20]/30'
                      } rounded-lg text-gray-300 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50`}
                      placeholder="Enter 8-digit SPS membership ID"
                    />
                    {membershipIdError && (
                      <p className="text-red-500 text-xs mt-1">{membershipIdError}</p>
                    )}
                    <p className="text-yellow-400 text-sm mt-2">
                      Note: Your SPS membership ID will be verified from our database
                    </p>
                  </div>
                )}

                {/* Fee box */}
                <div className="p-4 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 rounded-xl border border-[#78BE20]/30">
                  <p className="text-lg font-semibold text-white">
                    Registration Fee: ₹{getFee()}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {membershipStatus === 'SPS'
                      ? 'Free for SPS members'
                      : 'Registration fee for non-SPS members'}
                  </p>
                </div>
              </div>
            </div>


            {/* Payment Section - Only shown for Non-SPS members */}
            {/* Payment Section - Only shown for Non-SPS members */}
            {membershipStatus === 'Non-SPS' && (
              <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Payment Details</h3>
                <div className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-64 h-68 p-2 bg-slate-900/50 rounded-xl border border-[#78BE20]/30 flex items-center justify-center">
                      <img
                        src="https://i.imgur.com/O7zag8H.jpeg"
                        alt="Google Pay QR Code"
                        className="rounded-lg w-60 h-60 object-contain"
                      />  
                    </div>
                    <p className="text-white text-sm">UPI ID: <span className="text-[#78BE20]">chinmaybhat1904-1@oksbi</span></p>
                  </div>

                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                    <input
                      type="text"
                      value={utrNumber}
                      onChange={(e) => handleUtrChange(e.target.value)}
                      required
                      maxLength={12}
                      className={`w-full pl-10 pr-4 py-2 bg-slate-900/50 border ${
                        utrError ? 'border-red-500' : 'border-[#78BE20]/30'
                      } rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300`}
                      placeholder="Enter 12-character UTR number"
                    />
                    {utrError && <p className="text-red-500 text-xs mt-1">{utrError}</p>}
                  </div>
                </div>
              </div>
            )}


            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
              </button>
            </div>

            {/* Submission Status */}
            {submitStatus && (
              <div
                className={`p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'bg-green-900/50 border border-green-500/30'
                    : 'bg-red-900/50 border border-red-500/30'
                }`}
              >
                <p className={submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                  {submitStatus.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      
      {submitStatus && isPopupOpen && (
        <RegistrationPopup
          type={submitStatus.type}
          message={submitStatus.message}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </section>
  );
};

export default RegistrationSectionIV;
