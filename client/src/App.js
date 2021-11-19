import React from 'react';
import Todos from './components/Todos';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/todos" element={
          <RequireAuth>
            <Todos />
          </RequireAuth>
        } />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}