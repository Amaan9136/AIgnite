import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/Dashboard/Index';

const TeamDashboard = () => {
  const router = useRouter();
  const { teamid, key } = router.query;
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (teamid && key) {
      const fetchTeam = async () => {
        try {
          const res = await fetch(`/api/team/${teamid}?key=${key}`);
          if (res.ok) {
            const data = await res.json();
            setTeam(data);
          } else {
            setError('Invalid team ID or key');
          }
        } catch (err) {
          setError('Error fetching team data');
        } finally {
          setLoading(false);
        }
      };
      fetchTeam();
    }
  }, [teamid, key]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return <Dashboard team={team} />;
};

export default TeamDashboard;
