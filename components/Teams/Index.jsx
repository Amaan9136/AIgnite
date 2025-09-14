import React, { useState, useEffect } from 'react';

const Teams = ({ onLogout }) => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch('/api/teams');
        const data = await res.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) return <div className="text-center py-10">Loading teams...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Registered Teams</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {teams.map((team) => (
          <div
            key={team._id}
            className="bg-gray-800 p-6 rounded-lg m-auto w-[80%] cursor-pointer hover:bg-gray-700 transition"
            onClick={() => {
              setSelectedTeam(team);
              setIsModalOpen(true);
            }}
          >
            <h2 className="text-xl font-semibold text-white">{team.teamName}</h2>
            <p className="text-gray-300">Lead: {team.teamLeadName}</p>
            <p className="text-gray-300">College: {team.collegeName}</p>
          </div>
        ))}
      </div>
      {isModalOpen && selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedTeam.teamName} Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-gray-300">
                <p><strong className="text-white">Team Lead:</strong> {selectedTeam.teamLeadName}</p>
                <p><strong className="text-white">Email:</strong> {selectedTeam.teamLeadEmail}</p>
                <p><strong className="text-white">Phone:</strong> {selectedTeam.teamLeadPhoneNumber}</p>
                <p><strong className="text-white">College:</strong> {selectedTeam.collegeName}</p>
                <p><strong className="text-white">Semester:</strong> {selectedTeam.semester}</p>
                <p><strong className="text-white">City:</strong> {selectedTeam.city}</p>
                <p><strong className="text-white">Members:</strong> {selectedTeam.teamMembers}, {selectedTeam.additionalMember1}, {selectedTeam.additionalMember2}</p>
                <p><strong className="text-white">Project Title:</strong> {selectedTeam.projectTitle}</p>
                <p><strong className="text-white">Category:</strong> {selectedTeam.projectCategory.join(', ')}</p>
                <p><strong className="text-white">Description:</strong> {selectedTeam.projectDescription}</p>
                <p><strong className="text-white">Transaction ID:</strong> {selectedTeam.transactionId}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Payment Screenshots</h3>
                {selectedTeam.paymentScreenshot && selectedTeam.paymentScreenshot.map((screenshot, index) => (
                  <img key={index} src={screenshot.url} alt={`Payment Screenshot ${index + 1}`} className="w-full h-auto mb-2 rounded" />
                ))}
              </div>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={() => {
                setIsModalOpen(false);
                setSelectedTeam(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
