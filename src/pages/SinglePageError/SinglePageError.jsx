import { Link, useRouteError } from "react-router-dom";
import SingleErrorWrapper from "./SinglePageError";

function SinglePageError() {
  const error = useRouteError();

  return (
    <SingleErrorWrapper>
      <div>
        {/* <h3>{error.message}</h3> */}

        <h2>Ohh! Something went wrong</h2>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </SingleErrorWrapper>
  );

  return (
    <SingleErrorWrapper>
      <h3>Something went wrong</h3>
    </SingleErrorWrapper>
  );
}

export default SinglePageError;
