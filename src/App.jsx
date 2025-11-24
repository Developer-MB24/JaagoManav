import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Account from "./pages/Account.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import RegisterForEducation from "./pages/RegisterForEducation.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Contact from "./pages/Contact.jsx";

// ⬇️ Custom cursor
import CustomCursor from "./CustomCursor.jsx";
import Whoarewe from "./pages/Whoarewe.jsx";

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
    <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
      {/* Hide native cursor on desktop; keep touch devices untouched */}
      <div
        className="hidden md:block fixed inset-0 pointer-events-none"
        style={{ cursor: "none", zIndex: 9998 }}
      />
      {/* Custom cursor (dot + trailing ring) */}
      <CustomCursor
        innerSize={12} // dot size (unchanged)
        outerSize={44} // ⬅️ smaller ring
        outerBorder={3}
        colorInner="#138808" // dot (green)
        colorOuter="#FF9933" // ring (orange)
        trailEase={0.12}
        snapVelocity={0.12}
      />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<Service />} />

          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/whoarewe" element={<Whoarewe />} />
          {/* <Route path="/whoweare" element={<Whoweare />} /> */}
          <Route
            path="/register/education"
            element={<RegisterForEducation />}
          />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
