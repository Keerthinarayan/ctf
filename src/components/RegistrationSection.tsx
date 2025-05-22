import React, { useState } from 'react';
import { User, Phone, Mail, Users, School, GraduationCap, Building2 } from 'lucide-react';
import { supabaseClient } from '../services/supabaseClient';
import RegistrationPopup from './RegistrationPopup';

interface TeamMember {
  name: string;
}

const RegistrationSection: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [memberCount, setMemberCount] = useState(0);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [membershipStatus, setMembershipStatus] = useState('Non-IEEE');
  const [membershipId, setMembershipId] = useState('');
  const [membershipIdError, setMembershipIdError] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [utrError, setUtrError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleMembershipIdChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    setMembershipId(digitsOnly);
    if (digitsOnly.length > 0 && digitsOnly.length !== 8) {
      setMembershipIdError('IEEE Membership ID must be exactly 8 digits');
    } else {
      setMembershipIdError('');
    }
  };

  const handleMemberCountChange = (count: number) => {
    const validCount = Math.min(Math.max(0, count), 3);
    setMemberCount(validCount);
    if (validCount > members.length) {
      setMembers([...members, ...Array(validCount - members.length).fill({ name: '' })]);
    } else {
      setMembers(members.slice(0, validCount));
    }
  };

  const handleMemberNameChange = (index: number, name: string) => {
    const newMembers = [...members];
    newMembers[index] = { name };
    setMembers(newMembers);
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

  const isFormValid = () => {
    const semesterNum = Number(semester);
    return (
      teamName.trim() !== '' &&
      captainName.trim() !== '' &&
      email.trim() !== '' &&
      phone.length === 10 &&
      !isNaN(semesterNum) && semesterNum >= 1 && semesterNum <= 8 &&
      branch.trim() !== '' &&
      collegeName.trim() !== '' &&
      utrNumber.length === 12 &&
      members.every(member => member.name.trim() !== '') &&
      (membershipStatus === 'Non-IEEE' || (membershipId.trim() !== '' && membershipId.length === 8))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill all required fields correctly before submitting.',
      });
      setIsPopupOpen(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data, error } = await supabaseClient
        .from('registrations')
        .insert([{
          team_name: teamName,
          captain_name: captainName,
          email: email,
          phone_number: phone,
          semester: parseInt(semester),
          branch: branch,
          college_name: collegeName,
          member1_name: members[0]?.name || null,
          member2_name: members[1]?.name || null,
          member3_name: members[2]?.name || null,
          membership_type: membershipStatus,
          membership_id: membershipStatus === 'Non-IEEE' ? null : membershipId,
          utr_number: utrNumber,
        }]);

      if (error) {
        throw error;
      }

      setSubmitStatus({
        type: 'success',
        message: 'Registration successful! Thank you for registering.',
      });
      setIsPopupOpen(true);

      setTeamName('');
      setCaptainName('');
      setEmail('');
      setPhone('');
      setPhoneError('');
      setMemberCount(0);
      setMembers([]);
      setMembershipStatus('Non-IEEE');
      setMembershipId('');
      setMembershipIdError('');
      setSemester('');
      setBranch('');
      setCollegeName('');
      setUtrNumber('');
      setUtrError('');
    } catch (error: any) {
      console.error('Error during registration:', error);
      setSubmitStatus({
        type: 'error',
        message: error.code === '23505' 
          ? 'Registration failed: Email or UTR number already exists.'
          : 'Registration failed. Please try again.',
      });
      setIsPopupOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register Your{" "}
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the challenge and showcase your skills at DecodeX.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Team Information</h3>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                  placeholder="Enter team name"
                />
              </div>
            </div>

            {/* Captain Information Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Team Captain Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#78BE20] h-5 w-5" />
                  <input
                    type="text"
                    value={captainName}
                    onChange={(e) => setCaptainName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter captain's name"
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
                    placeholder="Enter email address"
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
                    className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                    placeholder="Enter branch"
                  />
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Team Members (up to 4 including captain)</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={memberCount}
                    onChange={(e) => handleMemberCountChange(parseInt(e.target.value))}
                    required
                    className="w-full px-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                  />
                  <p className="text-gray-400 text-xs mt-1">Total team size: {memberCount + 1} (including captain)</p>
                </div>
                <div className="space-y-4">
                  {members.length > 0 ? (
                    members.map((member, index) => (
                      <div key={index} className="relative">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberNameChange(index, e.target.value)}
                          required
                          className="w-full px-4 py-2 bg-slate-900/50 border border-[#78BE20]/30 rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300"
                          placeholder={`Enter member ${index + 1} name`}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No additional team members. Add members by increasing the count above.</p>
                  )}
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

            {/* Payment Section */}
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
                  <input
                    type="text"
                    value={utrNumber}
                    onChange={(e) => handleUtrChange(e.target.value)}
                    required
                    maxLength={12}
                    className={`w-full px-4 py-2 bg-slate-900/50 border ${
                      utrError ? 'border-red-500' : 'border-[#78BE20]/30'
                    } rounded-lg focus:ring-2 focus:ring-[#78BE20] focus:border-transparent text-gray-300`}
                    placeholder="Enter 12-character UTR number"
                  />
                  {utrError && <p className="text-red-500 text-xs mt-1">{utrError}</p>}
                </div>
              </div>
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

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className="px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </button>
            </div>
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

export default RegistrationSection;
