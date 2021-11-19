import React from 'react';
import Todos from './components/Todos';
import { useGlobalContext } from './context/AppContext';

export default function App() {
  const { login, user } = useGlobalContext();

  return (
    <>
      <Todos />
      <button style={{ margin: 'auto', display: 'block' }} onClick={() => login({})}>Login</button>
      <p style={{ textAlign: 'center' }}>{user?.name}</p>
    </>
  )
}