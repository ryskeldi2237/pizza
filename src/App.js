import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import "./media.css";
export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
}
