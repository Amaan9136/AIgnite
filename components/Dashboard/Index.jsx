import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AIgnite from '../../images/logos/Aignite2.0.png';

const Dashboard = ({ team }) => {
  if (!team) return <div className="text-center py-10 text-white">Loading...</div>;

  const members = [
    { name: team.teamLeadName, role: 'Team Lead', email: team.teamLeadEmail, phone: team.teamLeadPhoneNumber },
    ...(team.additionalMember1 && team.additionalMember1.trim() ? [{ name: team.additionalMember1, role: 'Member' }] : []),
    ...(team.additionalMember2 && team.additionalMember2.trim() ? [{ name: team.additionalMember2, role: 'Member' }] : []),
    ...(team.additionalMember3 && team.additionalMember3.trim() ? [{ name: team.additionalMember3, role: 'Member' }] : []),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={AIgnite} alt="AIgnite-Logo" width={120} height={120} className="cursor-pointer" />
          </Link>
          <div className="text-center flex flex-row gap-4 justify-center items-center">
            <h1 className="text-2xl font-bold text-white">{team.teamName}</h1>
            <p className="text-sm text-gray-400">{team.collegeName}</p>
                  <p className="text-sm text-gray-400">{team.city}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Dashboard</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
      
          <p className="text-gray-400">{team.city}, Semester {team.semester}</p>
        </div>

        {/* Team Members */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{member.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  {member.email && <p className="text-sm text-gray-500">{member.email}</p>}
                  {member.phone && <p className="text-sm text-gray-500">{member.phone}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Project Details</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{team.projectTitle}</h3>
                <p className="text-gray-300 mb-4">{team.projectDescription}</p>
                <div className="mb-4">
                  <strong className="text-white">Categories:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {team.projectCategory.map((cat, idx) => (
                      <span key={idx} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p><strong className="text-white">Transaction ID:</strong> {team.transactionId}</p>
                <p><strong className="text-white">Registration Date:</strong> {new Date(team.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
