import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import ChatbotUI from './ChatbotUI/ChatbotUI';

function LoginWrapper({ onLogin }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin();
    navigate('/chat');
  };
  return <LoginPage onLogin={handleLogin} />;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          loggedIn ? <Navigate to="/chat" /> : <LoginWrapper onLogin={() => setLoggedIn(true)} />
        } />
        <Route path="/chat" element={
          loggedIn ? <ChatbotUI /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
}

export default App; 