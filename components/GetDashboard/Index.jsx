import React, { useState } from 'react';

const GetDashboard = () => {
  const [utr, setUtr] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!utr.trim()) {
      setError('Please enter a UTR number');
      return;
    }
    setLoading(true);
    setError('');
    setLink('');

    try {
      const res = await fetch(`/api/team/by-utr?utr=${encodeURIComponent(utr)}`);
      if (res.ok) {
        const data = await res.json();
        const dashboardLink = `${window.location.origin}/dashboard/${data.teamId}?key=${data.secureKey}`;
        setLink(dashboardLink);
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Team not found');
      }
    } catch (err) {
      setError('Error fetching team data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/images/sectionsAssets/About-bg.png')] bg-cover bg-center text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-md mx-auto bg-gray-900/80 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400 text-center">Get Dashboard Link</h2>
          <p className="text-center text-gray-300 mb-4">A email is sent to team lead email address with dashboard link, if you didn't get mail enter the UTR ID of the payment during registration to get dashboard link</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="utr" className="block text-sm font-medium text-gray-300 mb-2">
                Enter UTR Number
              </label>
              <input
                type="text"
                id="utr"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your UTR number"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-blue-800 hover:to-purple-800 transition-all disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Get Link'}
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {link && (
            <div className="mt-4 text-center">
              <p className="text-green-400 mb-2">Dashboard Link Generated:</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline hover:text-yellow-300 break-all"
              >
                {link}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetDashboard;
