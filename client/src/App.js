import React from 'react';
import Todos from './components/Todos';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/todos" element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>}
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}