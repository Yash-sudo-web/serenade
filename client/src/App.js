import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Registration } from './components/Registration';
import { Login } from './components/Login';

const PrivateRoute = ({ path, element }) => {
  const token = localStorage.getItem('token');

  // If token is not present, redirect to the registration page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the provided element
  return element;
};

const PublicRoute = ({ path, element }) => {
  const token = localStorage.getItem('token');

  // If token is present, redirect to the sidebar
  if (token) {
    return <Navigate to="/sidebar" replace />;
  }

  // Otherwise, render the provided element
  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Registration />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/sidebar" element={<PrivateRoute element={<Sidebar />} />} />
      </Routes>
    </Router>
  );
}

export default App;
