import React, { useState } from 'react';

const Teams = ({ onLogout, initialTeams = [] }) => {
  const [teams, setTeams] = useState(initialTeams);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatingPayment, setUpdatingPayment] = useState(false);
  const [updatingPPT, setUpdatingPPT] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = teams.filter(team => team.teamName.toLowerCase().includes(searchQuery.toLowerCase()));

  const handlePPTAction = async (action) => {
    setUpdatingPPT(true);
    try {
      const res = await fetch('/api/admin/team/ppt-selection', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teamId: selectedTeam.teamId,
          pptSelected: action,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('API Response:', data);

        // Update selected team state
        setSelectedTeam(prevTeam => ({
          ...prevTeam,
          pptSelected: action
        }));

        // Update teams array state
        setTeams((prevTeams) =>
          prevTeams.map((team) =>
            team._id === selectedTeam._id
              ? { ...team, pptSelected: action }
              : team
          )
        );

        console.log('State updated successfully');
      } else {
        console.error('Failed to update PPT selection');
        const errorData = await res.json();
        console.error('Error response:', errorData);
      }
    } catch (error) {
      console.error('Error updating PPT selection:', error);
    } finally {
      setUpdatingPPT(false);
      setShowConfirmDialog(false);
      setConfirmAction(null);
      setConfirmMessage('');
    }
  };

  const showConfirmation = (action, message) => {
    setConfirmAction(action);
    setConfirmMessage(message);
    setShowConfirmDialog(true);
  };

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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search teams by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div className="flex flex-col space-y-6">
        {filteredTeams.length === 0 ? (
          <div className="text-center py-10">
            {teams.length === 0 ? (
              <>
                <p className="text-gray-400 text-lg">No teams registered yet.</p>
                <p className="text-gray-500 mt-2">Teams will appear here once they register for events.</p>
              </>
            ) : (
              <p className="text-gray-400 text-lg">No teams match your search.</p>
            )}
          </div>
        ) : (
          filteredTeams.map((team) => (
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
              <p className="text-blue-400 font-medium">Event: {team.eventName}</p>
            </div>
          ))
        )}
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
                <p><strong className="text-white">Event:</strong> {selectedTeam.eventName}</p>
                <p><strong className="text-white">Semester:</strong> {selectedTeam.semester}</p>
                <p><strong className="text-white">City:</strong> {selectedTeam.city}</p>
                <p><strong className="text-white">Members:</strong> {selectedTeam.additionalMember1}, {selectedTeam.additionalMember2}, {selectedTeam.additionalMember3}</p>
                <p><strong className="text-white">Project Title:</strong> {selectedTeam.projectTitle}</p>
                <p><strong className="text-white">Category:</strong> {selectedTeam.projectCategory ? selectedTeam.projectCategory.join(', ') : 'N/A'}</p>
                <p><strong className="text-white">Transaction ID:</strong> {selectedTeam.transactionId}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Payment Screenshots</h3>
                {selectedTeam.paymentScreenshot && selectedTeam.paymentScreenshot.map((screenshot, index) => (
                  <img key={index} src={screenshot.url} alt={`Payment Screenshot ${index + 1}`} className="w-full h-auto mb-2 rounded" />
                ))}
                {/* Payment Verification - shown for all events */}
                <div className="mt-4">
                  <p className="text-white font-semibold">
                    Payment Verified: {selectedTeam.paymentVerified ? 'Yes' : 'No'}
                  </p>
                  <button
                    onClick={async () => {
                      const newValue = !selectedTeam.paymentVerified;
                      setUpdatingPayment(true);
                      try {
                        const res = await fetch('/api/admin/team/payment-verified', {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            teamId: selectedTeam.teamId,
                            paymentVerified: newValue,
                          }),
                        });
                        if (res.ok) {
                          const data = await res.json();
                          setSelectedTeam(data.team);
                          setTeams((prevTeams) =>
                            prevTeams.map((team) =>
                              team._id === data.team._id ? data.team : team
                            )
                          );
                        } else {
                          console.error('Failed to update payment verification');
                        }
                      } catch (error) {
                        console.error('Error updating payment verification:', error);
                      } finally {
                        setUpdatingPayment(false);
                      }
                    }}
                    disabled={updatingPayment}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
                  >
                    {updatingPayment ? 'Updating...' : selectedTeam.paymentVerified ? 'Unverify Payment' : 'Verify Payment'}
                  </button>
                </div>

                {/* PPT Selection - shown for TECHXHIBIT REGISTRATION */}
                {selectedTeam.eventName === 'TECHXHIBIT REGISTRATION' && (
                  <div className="mt-4">
                    <p className="text-white font-semibold mb-2">
                      PPT Status: <span className={`px-2 py-1 rounded text-sm ${
                        selectedTeam.pptSelected === 'selected' ? 'bg-green-600' :
                        selectedTeam.pptSelected === 'rejected' ? 'bg-red-600' :
                        'bg-yellow-600'
                      }`}>
                        {selectedTeam.pptSelected || 'pending'}
                      </span>
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => showConfirmation('selected', 'Are you sure you want to select this team\'s PPT?')}
                        disabled={updatingPPT || selectedTeam.pptSelected === 'selected'}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
                      >
                        {updatingPPT ? 'Updating...' : 'Select PPT'}
                      </button>
                      <button
                        onClick={() => showConfirmation('rejected', 'Are you sure you want to reject this team\'s PPT?')}
                        disabled={updatingPPT || selectedTeam.pptSelected === 'rejected'}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition disabled:opacity-50"
                      >
                        {updatingPPT ? 'Updating...' : 'Reject'}
                      </button>
                    </div>
                  </div>
                )}
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

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Action</h3>
            <p className="text-gray-300 mb-6">{confirmMessage}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  handlePPTAction(confirmAction);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setShowConfirmDialog(false);
                  setConfirmAction(null);
                  setConfirmMessage('');
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
