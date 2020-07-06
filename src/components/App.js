import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Common/Header";
import Courses from "./Courses";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <Courses />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
