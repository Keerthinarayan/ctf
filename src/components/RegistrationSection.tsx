import React, { useState } from 'react';
import { User, Phone, Mail, Users, School, GraduationCap, Building2 } from 'lucide-react';

interface TeamMember {
  name: string;
}

const RegistrationSection: React.FC = () => {
  // Form state
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

  // Calculate registration fee based on membership status
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

  // Handle membership ID input changes
  const handleMembershipIdChange = (value: string) => {
    // Only allow digits for IEEE membership ID
    const digitsOnly = value.replace(/\D/g, '');
    setMembershipId(digitsOnly);
    
    // Validate IEEE membership ID length - should be exactly 8 digits
    if (digitsOnly.length > 0 && digitsOnly.length !== 8) {
      setMembershipIdError('IEEE Membership ID must be exactly 8 digits');
    } else {
      setMembershipIdError('');
    }
  };

  // Handle team member count changes
  const handleMemberCountChange = (count: number) => {
    // Limit team size to maximum 3 additional members (plus captain = 4 total)
    const validCount = Math.min(Math.max(0, count), 3);
    setMemberCount(validCount);
    
    // Adjust members array based on new count
    if (validCount > members.length) {
      setMembers([...members, ...Array(validCount - members.length).fill({ name: '' })]);
    } else {
      setMembers(members.slice(0, validCount));
    }
  };

  // Handle individual team member name changes
  const handleMemberNameChange = (index: number, name: string) => {
    const newMembers = [...members];
    newMembers[index] = { name };
    setMembers(newMembers);
  };

  // Handle phone number input changes
  const handlePhoneChange = (value: string) => {
    // Only allow digits
    const digitsOnly = value.replace(/\D/g, '');
    setPhone(digitsOnly);
    
    // Validate phone number length
    if (digitsOnly.length > 0 && digitsOnly.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
    } else {
      setPhoneError('');
    }
  };

  // Handle UTR number input changes
  const handleUtrChange = (value: string) => {
    // UTR can contain both letters and numbers
    const alphanumericOnly = value.replace(/[^a-zA-Z0-9]/g, '');
    setUtrNumber(alphanumericOnly);
    
    // Validate UTR number length - should be 12 characters
    if (alphanumericOnly.length > 0 && alphanumericOnly.length !== 12) {
      setUtrError('UTR number must be exactly 12 characters');
    } else {
      setUtrError('');
    }
  };

  // Validate entire form
  const isFormValid = () => {
    return (
      teamName.trim() !== '' &&
      captainName.trim() !== '' &&
      email.trim() !== '' &&
      phone.length === 10 &&
      semester.trim() !== '' &&
      branch.trim() !== '' &&
      collegeName.trim() !== '' &&
      utrNumber.length === 12 &&
      members.every(member => member.name.trim() !== '') &&
      (membershipStatus === 'Non-IEEE' || (membershipId.trim() !== '' && membershipId.length === 8))
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    if (!isFormValid()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill all required fields correctly before submitting.',
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          teamName,
          captainName,
          email,
          phone,
          memberCount,
          members: members.map(m => m.name),
          membershipStatus,
          membershipId,
          semester,
          branch,
          collegeName,
          utrNumber,
          fee: getFee(),
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Registration successful! Thank you for registering.',
      });

      // Reset form after successful submission
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
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Registration failed. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Register Your <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Join the challenge and showcase your skills at DecodeX
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">Team Information</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Team Name</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter team name"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Captain Information Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">Team Captain Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Captain Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={captainName}
                      onChange={(e) => setCaptainName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter captain's name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      required
                      maxLength={10}
                      className={`w-full pl-10 pr-4 py-2 bg-slate-900/50 border ${
                        phoneError ? 'border-red-500' : 'border-slate-700'
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                      placeholder="Enter 10-digit phone number"
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">College Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter college name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Semester</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter semester"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Branch</label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter branch"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">Team Members (4 members) </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of  Members (Captain + Maximum of 3 members )
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={memberCount}
                    onChange={(e) => handleMemberCountChange(parseInt(e.target.value))}
                    required
                    className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-gray-400 text-xs mt-1">Note: Total team size will be {memberCount + 1} (including captain)</p>
                </div>

                <div className="space-y-4">
                  {members.length > 0 ? (
                    members.map((member, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Additional Member {index + 1} Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberNameChange(index, e.target.value)}
                          required
                          className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">IEEE Membership</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Membership Status</label>
                  <select
                    value={membershipStatus}
                    onChange={(e) => setMembershipStatus(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="Non-IEEE">Non-IEEE</option>
                    <option value="IEEE">IEEE</option>
                    <option value="SPS IEEE">SPS IEEE</option>
                  </select>
                </div>

                {membershipStatus !== 'Non-IEEE' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Membership ID (8 digits)</label>
                    <input
                      type="text"
                      value={membershipId}
                      onChange={(e) => handleMembershipIdChange(e.target.value)}
                      required
                      maxLength={8}
                      className={`w-full px-4 py-2 bg-slate-900/50 border ${
                        membershipIdError ? 'border-red-500' : 'border-slate-700'
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                      placeholder="Enter 8-digit membership ID"
                    />
                    {membershipIdError && (
                      <p className="text-red-500 text-xs mt-1">{membershipIdError}</p>
                    )}
                  </div>
                )}

                <div className="p-4 bg-slate-900/50 rounded-lg border border-indigo-500/30">
                  <p className="text-lg font-semibold text-white">Registration Fee: ₹{getFee()}</p>
                  <p className="text-sm text-gray-400 mt-1">Based on your membership status</p>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">Payment Details</h3>
              
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="w-64 h-64 bg-slate-900/50 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center">
                    <img
                      src="https://i.imgur.com/QR-Code.png"
                      alt="Google Pay QR Code"
                      className="max-w-full max-h-full p-4"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">UTR Number (12 characters)</label>
                  <input
                    type="text"
                    value={utrNumber}
                    onChange={(e) => handleUtrChange(e.target.value)}
                    required
                    maxLength={12}
                    className={`w-full px-4 py-2 bg-slate-900/50 border ${
                      utrError ? 'border-red-500' : 'border-slate-700'
                    } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                    placeholder="Enter 12-character UTR number"
                  />
                  {utrError && (
                    <p className="text-red-500 text-xs mt-1">{utrError}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submission Status */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/50 border border-green-500/30' 
                  : 'bg-red-900/50 border border-red-500/30'
              }`}>
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
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;