import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const res = await fetch('http://localhost:4000/dashboard');
      const data = await res.json();
      setDashboardData(data);
      setTimeout(() => setIsLoading(false), 2000);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>posts - {dashboardData.posts}</h2>
      <h2>likes - {dashboardData.likes}</h2>
      <h2>followers - {dashboardData.followers}</h2>
      <h2>following - {dashboardData.following}</h2>
    </div>
  );
}
