import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from "typewriter-effect";
import AIgnite from '../../images/logos/Aignite2.0.png';
import Atom from '../../images/shapes/atomWhite.png';
import Globe from '../../images/shapes/globe.png';
import TeamNav from './TeamNav';

const Dashboard = ({ team }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showConfetti, setShowConfetti] = useState(false);
  const [competitor, setCompetitor] = useState(null);
  const [findingCompetitor, setFindingCompetitor] = useState(false);

  useEffect(() => {
    // Trigger confetti animation on component mount
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000); // Extended to 5 seconds for more dramatic crossfire effect
    return () => clearTimeout(timer);
  }, []);

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
          <p><strong>Event Name:</strong> {team.eventName}</p>
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
        {team.pptSelected === "selected" && (
          <div className="mt-4">
            <p className="text-lg mb-4 text-yellow-400 font-semibold">Congratulations! Your PPT has been selected.</p>
            <a href="https://tally.so/r/woXQzP" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-blue-800 hover:to-purple-800 transition-all inline-block">
              Fill Payment and Accommodation Form
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const handleFindCompetitor = async () => {
    setFindingCompetitor(true);
    setCompetitor(null);

    setTimeout(async () => {
      try {
        const res = await fetch(`/api/team/random?eventName=${encodeURIComponent(team.eventName)}&excludeTeamName=${encodeURIComponent(team.teamName)}`);
        if (res.ok) {
          const data = await res.json();
          setCompetitor(data.competitorTeamName);
        } else {
          setCompetitor('No other teams found');
        }
      } catch (error) {
        setCompetitor('Error finding competitor');
      }
      setFindingCompetitor(false);
    }, 1500);
  };

  const renderFindCompetitor = () => {
    // Generate some dummy team names for the slot animation, including the competitor if available
    const baseTeams = [
      'Tech Titans', 'Code Crusaders', 'AI Avengers', 'Data Dynamos', 'Byte Busters',
      'Pixel Pioneers', 'Logic Legends', 'Cyber Champions', 'Quantum Quake', 'Digital Dragons'
    ];
    const dummyTeams = competitor ? [...baseTeams, competitor] : [...baseTeams, 'Finding Competitor...'];
    const repeatedTeams = [...dummyTeams, ...dummyTeams, ...dummyTeams, ...dummyTeams];
    const totalItems = repeatedTeams.length;
    const itemHeight = 20;
    const finalY = - (totalItems - 1) * itemHeight; // Position to show the last item

    return (
      <div className="bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700 max-w-2xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Find Your Competitor</h2>
        <p className="text-gray-300 mb-6">This is just for fun! Match with a random team from your event.</p>
        <button
          onClick={handleFindCompetitor}
          disabled={findingCompetitor}
          className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-blue-800 hover:to-purple-800 transition-all disabled:opacity-50 mb-6"
        >
          {findingCompetitor ? 'Finding...' : 'Find Competitor'}
        </button>
        {findingCompetitor && (
          <div className="relative h-20 overflow-hidden bg-gray-800 rounded-lg border-2 border-yellow-400 mx-auto w-64">
            <motion.div
              animate={{ y: finalY }}
              transition={{
                duration: 1.5,
                ease: "easeOut"
              }}
              className="flex flex-col items-center"
            >
              {repeatedTeams.map((team, index) => (
                <div key={index} className="h-20 flex items-center justify-center text-white font-bold text-lg">
                  {team}
                </div>
              ))}
            </motion.div>
          </div>
        )}
        {competitor && !findingCompetitor && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-lg border-2 border-yellow-400"
          >
            Your Competitor Team Name: <span className="text-yellow-400">{competitor}</span>
          </motion.div>
        )}
      </div>
    );
  };

  // Enhanced Confetti component with blaster-like effects from both sides
  const Confetti = () => {
    const particles = Array.from({ length: 80 }, (_, i) => i);
    const shapes = ['circle', 'square', 'triangle', 'star'];
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#FF8C42', '#9B59B6', '#E74C3C', '#27AE60'];

    const getRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const getRandomSize = () => Math.random() * 8 + 4; // 4-12px

    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {particles.map((particle) => {
          const shape = getRandomShape();
          const size = getRandomSize();
          const color = getRandomColor();
          const isLeftSide = particle % 2 === 0; // Alternate between left and right sides

          // Start from left or right side
          const startX = isLeftSide ? -100 : window.innerWidth + 100;
          const startY = Math.random() * 300 + 100; // Random vertical position

          // Calculate end position - particles move toward center and then spread
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const angle = Math.random() * Math.PI - Math.PI / 2; // -90 to +90 degrees for inward spread
          const distance = Math.random() * 300 + 100;
          const endX = centerX + Math.cos(angle) * distance * (isLeftSide ? 1 : -1);
          const endY = centerY + Math.sin(angle) * distance + Math.random() * 150;

          let shapeClass = '';
          switch (shape) {
            case 'circle':
              shapeClass = 'rounded-full';
              break;
            case 'square':
              shapeClass = 'rounded-sm';
              break;
            case 'triangle':
              shapeClass = 'triangle';
              break;
            case 'star':
              shapeClass = 'star';
              break;
          }

          return (
            <motion.div
              key={particle}
              initial={{
                x: startX,
                y: startY,
                opacity: 1,
                scale: 0,
                rotate: 0
              }}
              animate={{
                x: endX,
                y: endY,
                opacity: [1, 1, 0],
                scale: [0, 1.2, 0.8],
                rotate: Math.random() * 720 - 360
              }}
              transition={{
                duration: Math.random() * 2 + 3, // 3-5 seconds
                ease: "easeOut",
                delay: Math.random() * 0.8,
                times: [0, 0.3, 1]
              }}
              className={`absolute ${shapeClass}`}
              style={{
                width: size,
                height: size,
                backgroundColor: shape !== 'star' ? color : 'transparent',
                border: shape === 'star' ? `2px solid ${color}` : 'none',
                clipPath: shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
                boxShadow: shape !== 'star' ? `0 0 ${size/2}px ${color}40` : 'none'
              }}
            />
          );
        })}

        {/* Add some sparkle effects from both sides */}
        {Array.from({ length: 20 }, (_, i) => i).map((sparkle) => {
          const isLeftSide = sparkle % 2 === 0;
          const startX = isLeftSide ? -50 : window.innerWidth + 50;

          return (
            <motion.div
              key={`sparkle-${sparkle}`}
              initial={{
                x: startX,
                y: Math.random() * 400 + 50,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 300,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "easeOut",
                delay: Math.random() * 1.5
              }}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                boxShadow: '0 0 6px #FFD700'
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[url('/images/sectionsAssets/About-bg.png')] bg-cover bg-center text-white relative overflow-hidden">

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      <TeamNav setActiveTab={setActiveTab} team={team}/>
      <div className="container mx-auto px-4 py-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <motion.div className="mb-10">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            Welcome to Your Team Dashboard
          </h1>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto">
            <Typewriter
              options={{
                strings: [
                  `Hello, ${team.teamLeadName}!`,
                  "Explore your team's profile, payment details, and project submissions.",
                  "Stay updated with event schedules and announcements.",
                  "Let's make this event an unforgettable experience!",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>
        <div className="flex justify-center space-x-10 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-20 h-20 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full flex items-center justify-center shadow-lg"
          >
            <Image src={Atom} alt="Atom" width={50} height={50} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="w-20 h-20 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
          >
            <Image src={Globe} alt="Globe" width={50} height={50} />
          </motion.div>
        </div>
      </motion.div>

        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'teammembers' && renderTeamMembers()}
        {activeTab === 'paymentdetails' && renderPaymentDetails()}
        {activeTab === 'projectpptsubmission' && renderPPTdetails()}
        {activeTab === 'findyourcompetitor' && renderFindCompetitor()}
      </div>
    </div>
  );
};

export default Dashboard;
