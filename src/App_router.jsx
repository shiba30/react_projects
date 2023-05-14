// ルーティング基礎、画面の遷移など
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/routerComponents/Home";
import { Page1 } from "./components/routerComponents/Page1";
import { Page2 } from "./components/routerComponents/Page2";
import { NotFound } from "./components/routerComponents/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page1/*" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
