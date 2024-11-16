import travoltaImage from "../assets/travolta.webp";

function ErrorPage() {
  return (
    <div>
      <h1>404 page not found</h1>
      <img src={travoltaImage} alt="error image" />
    </div>
  );
}

export default ErrorPage;
