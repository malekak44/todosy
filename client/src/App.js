import React, { useEffect } from 'react';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Today from './pages/Today';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Common/Navbar';
import Loading from './components/Common/Loading';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import AppHeader from './components/Common/AppHeader';
import { useGlobalContext } from './context/AppContext';
import RequireAuth from './components/Common/RequireAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const { isLoading, darkTheme } = useGlobalContext();

  useEffect(() => {
    const root = document.documentElement;
    if (darkTheme) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkTheme]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={
          <RequireAuth>
            <Todos />
          </RequireAuth>
        } />
        <Route path="/today" element={
          <RequireAuth>
            <Today />
          </RequireAuth>
        } />
        <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}