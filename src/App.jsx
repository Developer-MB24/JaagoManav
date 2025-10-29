import React, { Suspense, lazy } from 'react'
import MainLayout from './layout/MainLayout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))

export default function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div className="p-6">Loading…</div>}>
        <Home />
      </Suspense>
    </MainLayout>
  )
}
