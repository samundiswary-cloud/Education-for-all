import React from "react";
import EducationDashboard from "./EducationDashboard";
import StateEducationDashboard from "./StateEducationDashboard";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>Education for All</h2>
        <p>React Application with API Integration (No Backend)</p>
      </header>

      <main className="main">
        <EducationDashboard />
        <hr />
        <StateEducationDashboard />
      </main>

      <footer className="footer">
        <p>Demo: React + Public / UDISE-based Education Data</p>
      </footer>
    </div>
  );
}


