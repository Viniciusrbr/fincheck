import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { LaunchScreen } from '../view/components/LaunchScreen'
import { AuthLayout } from '../view/layouts/AuthLayout'
import { AuthGuard } from './AuthGuard'

const Dashboard = lazy(() =>
  import('../view/pages/Dashboard').then((m) => ({ default: m.Dashboard })),
)
const Login = lazy(() =>
  import('../view/pages/Login').then((m) => ({ default: m.Login })),
)
const Register = lazy(() =>
  import('../view/pages/Register').then((m) => ({ default: m.Register })),
)

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LaunchScreen isLoading />}>
        <Routes>
          <Route element={<AuthGuard isPrivate={false} />}>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>

          <Route element={<AuthGuard isPrivate={true} />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
