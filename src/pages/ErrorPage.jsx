import travoltaImage from "../assets/travolta.webp";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="page error">
      <h1>404 page not found</h1>
      <img src={travoltaImage} alt="error image" />
    </div>
  );
}

export default ErrorPage;
