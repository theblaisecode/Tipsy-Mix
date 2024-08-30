import { Link, useOutletContext } from "react-router-dom";
import CocktailCardWrapper from "./CocktailCard";

function CocktailCard({ image, name, id, info, glass }) {
  const data = useOutletContext();

  return (
    <CocktailCardWrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </CocktailCardWrapper>
  );
}

export default CocktailCard;
