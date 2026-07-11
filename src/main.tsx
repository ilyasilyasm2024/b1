import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'
import ResetPassword from './pages/ResetPassword.tsx'
import VerifyEmail from './pages/VerifyEmail.tsx'
import Pricing from './pages/Pricing.tsx'
import PricingFull from './pages/PricingFull.tsx'
import NotFound from './pages/NotFound.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/full" element={<PricingFull />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
