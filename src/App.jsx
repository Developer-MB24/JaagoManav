import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Account from "./pages/Account.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
// const Account = lazy(() => import("./pages/Account.jsx"));

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* / */}
          <Route index element={<Home />} />

          {/* /blog */}
          <Route path="/blog" element={<Blog />} />
          {/* /account */}
          <Route path="/account" element={<Account />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
