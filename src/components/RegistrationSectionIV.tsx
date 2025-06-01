import React, { useState, useEffect } from 'react';
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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registrationsClosed, setRegistrationsClosed] = useState(false);

  useEffect(() => {
    checkRegistrationCount();
  }, []);

  const checkRegistrationCount = async () => {
    try {
      const { count, error } = await supabaseClient
        .from('visit_registrations')
        .select('*', { count: 'exact' });

      if (error) throw error;
      
      if (count && count >= 15) {
        setRegistrationsClosed(true);
        setSubmitStatus({
          type: 'error',
          message: 'Registration is now closed as we have reached the maximum number of participants.'
        });
        setIsPopupOpen(true);
      }
    } catch (error) {
      console.error('Error checking registration count:', error);
    }
  };

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
    if (digitsOnly.length > 0 && digitsOnly.length <= 9) {
      setMembershipIdError('');
    } else {
      setMembershipIdError('');
    }
  };

  const validateForm = () => {
    if (phoneError || utrError || membershipIdError) return false;
    if (name.length > 30) return false;
    if (email.length > 50 || !email.includes('@')) return false;
    if (phone.length !== 10) return false;
    const sem = parseInt(semester, 10);
    if (isNaN(sem) || sem < 1 || sem > 8) return false;
    if (branch.length > 30) return false;
    if (collegeName.trim() === '' || collegeName.length > 100) return false;
    if (membershipStatus === 'SPS' && membershipId.length <= 7) return false;
    if (membershipStatus === 'Non-SPS' && utrNumber.length !== 12) return false;
    if (!termsAccepted) return false;
    return true;
  };

  const getValidationError = () => {
    if (name.length > 30) {
      return 'Name must not exceed 30 characters.';
    }
    if (email.length > 50 || !email.includes('@')) {
      return 'Email must be valid and not exceed 50 characters.';
    }
    if (phone.length !== 10) {
      return 'Phone number must be exactly 10 digits';
    }
    const sem = parseInt(semester, 10);
    if (isNaN(sem) || sem < 1 || sem > 8) {
      return 'Semester must be between 1 and 8.';
    }
    if (branch.length > 30) {
      return 'Branch must not exceed 30 characters.';
    }
    if (collegeName.trim() === '') {
      return 'College name is required.';
    }
    if (collegeName.length > 100) {
      return 'College name must not exceed 100 characters.';
    }
    if (membershipStatus === 'Non-SPS' && utrNumber.length !== 12) {
      return 'UTR number must be exactly 12 characters';
    }
    if (!termsAccepted) {
      return 'Please accept the terms and conditions.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registrationsClosed) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Registration is now closed as we have reached the maximum number of participants.' 
      });
      setIsPopupOpen(true);
      return;
    }

    const validationError = getValidationError();
    if (validationError) {
      setSubmitStatus({ 
        type: 'error', 
        message: validationError 
      });
      setIsPopupOpen(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { count } = await supabaseClient
        .from('visit_registrations')
        .select('*', { count: 'exact' });

      if (count && count >= 15) {
        setRegistrationsClosed(true);
        setSubmitStatus({
          type: 'error',
          message: 'Registration is now closed as we have reached the maximum number of participants.'
        });
        setIsPopupOpen(true);
        return;
      }

      const { error } = await supabaseClient.from('visit_registrations').insert([{
        name,
        email,
        phone_number: phone,
        semester: parseInt(semester, 10),
        branch,
        college_name: collegeName,
        membership_type: membershipStatus,
        membership_id: membershipStatus === 'SPS' ? membershipId : null,
        utr_number: membershipStatus === 'Non-SPS' ? utrNumber : null,
      }]);

      if (error) throw error;
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Registration submitted successfully!' 
      });
      setIsPopupOpen(true);

      setName('');
      setEmail('');
      setPhone('');
      setSemester('');
      setBranch('');
      setCollegeName('');
      setMembershipStatus('Non-SPS');
      setMembershipId('');
      setUtrNumber('');
      setTermsAccepted(false);

      await checkRegistrationCount();
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
            {registrationsClosed && (
              <span className="block mt-4 text-red-500">
                ⚠️ Registration is currently closed as we have reached the maximum number of participants.
              </span>
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
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

            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Academic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">IEEE SPS Membership</h3>
              <div className="space-y-6">
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

                {membershipStatus === 'SPS' && (
                  <div className="relative">
                    <input
                      type="text"
                      value={membershipId}
                      onChange={(e) => handleMembershipIdChange(e.target.value)}
                      required
                      maxLength={9}
                      className={`w-full px-4 py-3 bg-slate-900/50 border ${
                        membershipIdError ? 'border-red-500' : 'border-[#78BE20]/30'
                      } rounded-lg text-gray-300 focus:ring-2 focus:ring-[#78BE20] focus:border-[#78BE20]/50`}
                      placeholder="Enter SPS membership ID"
                    />
                    {membershipIdError && (
                      <p className="text-red-500 text-xs mt-1">{membershipIdError}</p>
                    )}
                    <p className="text-yellow-400 text-sm mt-2">
                      Note: Your SPS membership ID will be verified from our database
                    </p>
                  </div>
                )}

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

            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms-iv"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#78BE20]/30 bg-slate-900/50 text-[#78BE20] focus:ring-[#78BE20] focus:ring-offset-0"
                  required
                />
                <label htmlFor="terms-iv" className="text-gray-300 text-sm">
                  I have read all the documents and agree to the{' '}
                  <a
                    href="https://drive.google.com/file/d/1eBlJuojRuf2IF9W5BNuJ1ZTe_iwHfH03/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#78BE20] hover:text-[#62991a] underline"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !validateForm() || registrationsClosed}
                className={`px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105 ${
                  (isSubmitting || registrationsClosed) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : registrationsClosed ? 'Registration Closed' : 'Register Now'}
              </button>
            </div>

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
