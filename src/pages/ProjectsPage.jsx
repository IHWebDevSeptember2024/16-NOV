import "./ProjectsPage.css";
import { Link } from "react-router-dom";

function ProjectsPage(props) {
  const projects = props.projects;

  return (
    <div className="projects-page-container">
      <ul className="projects-container">
        {projects.map((project) => (
          <li className="project-card" key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
