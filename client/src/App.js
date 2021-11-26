import React from 'react';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Today from './pages/Today';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useGlobalContext } from './context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/today" element={<Today />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}