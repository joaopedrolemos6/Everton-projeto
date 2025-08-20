import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MedicalPage from './components/MedicalPage';
import BlogPage from './components/BlogPage';
import SinglePostPage from './components/SinglePostPage';
import WhatsAppButton from './components/WhatsAppButton';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

import { AuthProvider } from './context/AuthContext'; // Importar o AuthProvider

function App() {
  return (
    // Envolvemos tudo no AuthProvider
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contabilidade-medica" element={<MedicalPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<SinglePostPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Rota protegida para o painel */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;