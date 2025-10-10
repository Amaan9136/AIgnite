import { useState } from 'react';
import Teams from '../../components/Teams/Index';

export async function getServerSideProps(context) {

  // Fetch teams data on the server
  try {
    console.log('Admin dashboard: Fetching teams from API...');
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'https://www.aignite.live'}/api/teams`);
    const teams = await res.json();
    console.log('Admin dashboard: Received teams:', teams.length);
    return {
      props: {
        initialTeams: teams,
      },
    };
  } catch (error) {
    console.error('Error fetching teams:', error);
    return {
      props: {
        initialTeams: [],
      },
    };
  }
}

const AdminPage = ({ initialTeams }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setLoggedIn(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  if (loggedIn) {
    return <Teams onLogout={() => setLoggedIn(false)} initialTeams={initialTeams} />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Admin Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-white mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
