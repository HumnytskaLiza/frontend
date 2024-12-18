import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NavigationBar from "./components/ui/NavigationBar";
import Footer from "./components/ui/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import TestCoursePage from "./pages/TestCoursePage";
import TestDocumenPreview from "./pages/TestDocumentPreview";

import "./App.css";

function App() {
  const location = useLocation();

  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/signup";

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  };

  return (
    <div className="w-full flex flex-col">
      <ScrollToTop />
      <header>
        <NavigationBar />
      </header>
      <main className="w-[100vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/basics-of-ai" element={<TestCoursePage />} />
          <Route
            path="/courses/basics-of-ai/intro-to-basic-ai"
            element={<TestDocumenPreview />}
          />
        </Routes>
      </main>
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
