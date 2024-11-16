import "./App.css";
import LikeButton from "./components/LikeButton";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import projectsJson from "./data/projects.json";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const today = new Date();
  const projects = projectsJson;

  return (
    <>
      {/*  <LikeButton changeColor={false} />
      <LikeButton changeColor /> */}
      <Navbar />
      <main className="main-container">
        <aside>Esto es la sidebar</aside>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/home" element={<h1>ESTO ES HOME</h1>} /> */}
            <Route
              path="/projects"
              element={<ProjectsPage projects={projects} />}
            />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailsPage projects={projects} />}
            />
            <Route path="/about" element={<h1>ESTO ES ABOUT</h1>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </main>
      <footer>©️ {today.getFullYear()}</footer>
    </>
  );
}

export default App;
