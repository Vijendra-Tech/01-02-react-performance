import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LazyComp01 from "./LazyComp01";
// import LazyComp02 from "./LazyComp02";

const LazyComp01 = lazy(() => import("./LazyComp01"));
const LazyComp02 = lazy(() => import("./LazyComp02"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            Component loading ....
            <h2 className="loader">🌀</h2>
          </div>
        }
      >
        <Routes>
          <Route path="/lazy-2" element={<LazyComp02 />} />
          <Route path="/" element={<LazyComp01 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
