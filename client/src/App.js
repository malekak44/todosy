import React from 'react';
import Todos from './components/Todos';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Todos />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}