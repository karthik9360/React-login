import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;