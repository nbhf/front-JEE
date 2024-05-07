import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthUserManagement from './components/AuthUserManagement';
import Login from './components/Login';
import Student from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Student/>}/>
        <Route path="/register" element={<AuthUserManagement />} />
        <Route path="/login" element={<Login />} />
      
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
