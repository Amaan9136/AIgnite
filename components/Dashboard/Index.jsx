import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AIgnite from '../../images/logos/Aignite2.0.png';
import TeamNav from './TeamNav';

const Dashboard = ({ team }) => {
  const [activeTab, setActiveTab] = useState('profile');

  if (!team) return <div className="text-center py-10 text-white">Loading...</div>;

  const members = [
    { name: team.teamLeadName, role: 'Team Lead', email: team.teamLeadEmail, phone: team.teamLeadPhoneNumber },
    ...(team.additionalMember1 && team.additionalMember1.trim() ? [{ name: team.additionalMember1, role: 'Member' }] : []),
    ...(team.additionalMember2 && team.additionalMember2.trim() ? [{ name: team.additionalMember2, role: 'Member' }] : []),
    ...(team.additionalMember3 && team.additionalMember3.trim() ? [{ name: team.additionalMember3, role: 'Member' }] : []),
  ];

  const renderProfile = () => (
    <div className="bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700 max-w-5xl mx-auto mb-10">
      <h2 className="text-3xl font-semibold mb-6 text-yellow-400 text-center">Profile Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
        <div>
          <p><strong>Team Name:</strong> {team.teamName}</p>
          <p><strong>College Name:</strong> {team.collegeName}</p>
          <p><strong>City:</strong> {team.city}</p>
          <p><strong>Semester:</strong> {team.semester}</p>
        </div>
        <div>
          <p><strong>Team Lead Name:</strong> {team.teamLeadName}</p>
          <p><strong>Team Lead Email:</strong> {team.teamLeadEmail}</p>
          <p><strong>Team Lead Phone:</strong> {team.teamLeadPhoneNumber}</p>
        </div>
        <div>
          {team.additionalMember1 && team.additionalMember1.trim() && (
            <>
              <p><strong>Additional Member 1:</strong> {team.additionalMember1}</p>
            </>
          )}
          {team.additionalMember2 && team.additionalMember2.trim() && (
            <>
              <p><strong>Additional Member 2:</strong> {team.additionalMember2}</p>
            </>
          )}
          {team.additionalMember3 && team.additionalMember3.trim() && (
            <>
              <p><strong>Additional Member 3:</strong> {team.additionalMember3}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderTeamMembers = () => (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-400">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700 hover:border-gray-500 transition-all"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-white">{member.name.charAt(0).toUpperCase()}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-yellow-400 font-medium">{member.role}</p>
              {member.email && <p className="text-sm text-gray-400 mt-2">{member.email}</p>}
              {member.phone && <p className="text-sm text-gray-400">{member.phone}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderPaymentDetails = () => (
    <div className="bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700 max-w-2xl mx-auto mb-10">
      <div className="text-left text-gray-300">
        <p className="text-lg mb-4"><strong>Payment Status:</strong> {team.paymentVerified ? 'Verified' : 'Pending'}</p>
        {team.transactionId && (
          <p className="text-lg mb-4"><strong>UTR Number:</strong> {team.transactionId}</p>
        )}
        {team.paymentScreenshot && team.paymentScreenshot.length > 0 && (<>
             <p className="text-lg mb-4"><strong>Payment Screenshot:</strong> </p>
          <div className="flex justify-start space-x-4">
            {team.paymentScreenshot.map((screenshot, index) => (
              <div key={index} className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
              
                <Image
                  src={`${screenshot.url}`}
                  alt={`Payment Screenshot ${index + 1}`}
                  width={100}
                  height={70}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
const renderPPTdetails = () => (
    <div className="bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700 max-w-2xl mx-auto mb-10">
      <div className="text-left text-gray-300">
        <p className="text-lg mb-4"><strong>Project PPT shortlisted:</strong> {team.pptSelected === "pending"
    ? "Pending"
    : team.pptSelected === "selected"
    ? "Selected"
    : "Better Luck next time"}</p>
    
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[url('/images/sectionsAssets/About-bg.png')] bg-cover bg-center text-white relative overflow-hidden">
   
      <TeamNav setActiveTab={setActiveTab} team={team}/>
      <div className="container mx-auto px-4 py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
       
        </motion.div>


        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'teammembers' && renderTeamMembers()}
        {activeTab === 'paymentdetails' && renderPaymentDetails()}
        {activeTab === 'projectppt submission' && renderPPTdetails()}
      </div>
    </div>
  );
};

export default Dashboard;
