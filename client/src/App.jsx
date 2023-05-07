import { AuthProvider } from './contexts/AuthContext'
import { Routes } from './routes'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer theme="dark" />
    </AuthProvider>
  )
}