import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './i18n'
import App from './App.tsx'
import Login from './presentation/pages/Login.tsx'
import Signup from './presentation/pages/Signup.tsx'
import ForgotPassword from './presentation/pages/ForgotPassword.tsx'
import ResetPassword from './presentation/pages/ResetPassword.tsx'
import VerifyEmail from './presentation/pages/VerifyEmail.tsx'
import Pricing from './presentation/pages/Pricing.tsx'
import PricingFull from './presentation/pages/PricingFull.tsx'
import NotFound from './presentation/pages/NotFound.tsx'
import { AuthProvider } from './presentation/hooks/useAuth.tsx'
import PageLanguageSwitcher from './presentation/components/common/PageLanguageSwitcher.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PageLanguageSwitcher />
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
