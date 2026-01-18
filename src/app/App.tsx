import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { HomePage } from "./components/HomePage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { LoadingScreen } from "./components/LoadingScreen";
import { OpeningAnimation } from "./components/OpeningAnimation";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageLoadIndicator } from "./components/PageLoadIndicator";
import { ProjectCardTransition } from "./components/ProjectCardTransition";

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scrolling during opening and loading
    if (showOpening || isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showOpening, isLoading]);

  const handleOpeningComplete = () => {
    setShowOpening(false);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay content reveal for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {/* Opening animation - dark layer with initials */}
      <AnimatePresence mode="wait">
        {showOpening && (
          <OpeningAnimation onComplete={handleOpeningComplete} />
        )}
      </AnimatePresence>

      {/* Loading screen - appears after opening */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            onLoadingComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      {showContent && (
        <Router>
          <ScrollToTop />
          <PageLoadIndicator />
          <ProjectCardTransition />
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route
                path="/project/:projectId"
                element={<ProjectDetail />}
              />
            </Routes>
          </PageTransition>
        </Router>
      )}
    </>
  );
}