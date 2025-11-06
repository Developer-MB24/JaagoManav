import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Account from "./pages/Account.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

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
    <Routes>
      <Route element={<MainLayout />}>
        {/* / */}
        <Route index element={<Home />} />

        {/* /blog */}
        <Route path="/blog" element={<Blog />} />

        {/* /service and /service/:slug */}
        <Route path="/service" element={<Service />} />
        <Route path="/service/:slug" element={<Service />} />

        {/* /account */}
        <Route path="/account" element={<Account />} />

        {/* /about */}
        <Route path="/about" element={<About />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
