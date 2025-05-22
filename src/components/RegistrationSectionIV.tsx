import React, { useState } from 'react';
import { User, Phone, Mail, GraduationCap, School, CreditCard } from 'lucide-react';

const RegistrationSectionIV: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('Non-IEEE');
  const [membershipId, setMembershipId] = useState('');
  const [membershipIdError, setMembershipIdError] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [utrError, setUtrError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const getFee = () => {
    switch (membershipStatus) {
      case 'SPS IEEE':
        return 300;
      case 'IEEE':
        return 400;
      default:
        return 500;
    }
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
      setMembershipIdError('IEEE Membership ID must be exactly 8 digits');
    } else {
      setMembershipIdError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: 'success', message: 'Registration submitted!' });
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
              <h3 className="text-xl font-semibold text-white mb-4">Academic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter your branch"
                  />
                </div>
              </div>
            </div>

            {/* IEEE Membership Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">IEEE Membership</h3>
              <div className="space-y-6">
                <select
                  value={membershipStatus}
                  onChange={(e) => setMembershipStatus(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                >
                  <option value="Non-IEEE">Non-IEEE</option>
                  <option value="IEEE">IEEE</option>
                  <option value="SPS IEEE">SPS IEEE</option>
                </select>
                {membershipStatus !== 'Non-IEEE' && (
                  <div className="relative">
                    <input
                      type="text"
                      value={membershipId}
                      onChange={(e) => handleMembershipIdChange(e.target.value)}
                      required
                      maxLength={8}
                      className={`w-full px-4 py-2 bg-slate-900/50 border ${
                        membershipIdError ? 'border-red-500' : 'border-[#78BE20]/30'
                      } rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300`}
                      placeholder="Enter 8-digit membership ID"
                    />
                    {membershipIdError && <p className="text-red-500 text-xs mt-1">{membershipIdError}</p>}
                  </div>
                )}
                <div className="p-4 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 rounded-xl border border-[#78BE20]/30">
                  <p className="text-lg font-semibold text-white">Registration Fee: ₹{getFee()}</p>
                  <p className="text-sm text-gray-400 mt-1">Based on your membership status</p>
                </div>
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Payment Details</h3>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-slate-900/50 rounded-xl border border-[#78BE20]/30 flex items-center justify-center">
                    <img
                      src="https://i.imgur.com/QR-Code.png"
                      alt="Google Pay QR Code"
                      className="max-w-full max-h-full p-4"
                    />
                  </div>
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

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105"
              >
                Register Now
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
    </section>
  );
};

export default RegistrationSectionIV;