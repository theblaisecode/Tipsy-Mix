import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import ErrorWrapper from "./Error.js";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <ErrorWrapper>
        <div>
          <img src={img} alt="page not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to fid the page you are looking for</p>
          <Link to="/">Back to Home</Link>
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      <h3>Something went wrong</h3>
    </ErrorWrapper>
  );
}

export default Error;
