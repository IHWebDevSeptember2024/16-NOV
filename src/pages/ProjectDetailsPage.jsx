import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProjectDetailsPage(props) {
  const projects = props.projects;
  const params = useParams();

  console.log(params.projectId);

  const projectToDisplay = projects.find(
    (eachProject) => eachProject.id === params.projectId
  );

  console.log(projectToDisplay);
  if (projectToDisplay) {
    return (
      <>
        <h2>{projectToDisplay.title}</h2>
        <p>{projectToDisplay.description}</p>
      </>
    );
  } else {
    return <Navigate to="/error" />;
  }
}

export default ProjectDetailsPage;
