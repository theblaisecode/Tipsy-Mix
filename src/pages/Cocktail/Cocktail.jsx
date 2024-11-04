import { Link, useLoaderData, Navigate } from "react-router-dom";
import axios from "axios";
import CocktailWrapper from "./Cocktail";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cockatail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

function Cocktail() {
  const { id } = useLoaderData();

  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) {
    return <Navigate to="/" />;
  }

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  // Get both ingredients and their measures
  const ingredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key, index) => {
      const ingredientName = singleDrink[key];
      const measureKey = `strMeasure${index + 1}`;
      const measure = singleDrink[measureKey] || "";
      return {
        name: ingredientName,
        measure: measure,
        image: `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(
          ingredientName
        )}-Small.png`,
      };
    });

  return (
    <CocktailWrapper>
      <header>
        <Link to="/" className="btn">
          Back to Home
        </Link>

        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />

        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
          </p>
          <div className="ingredients-grid">
            {ingredients.map((item, index) => {
              return (
                <div key={item.name} className="ingredient-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ingredient-img"
                  />
                  <div className="ingredient-info">
                    <p>{item.name}</p>
                    <p className="measure">{item.measure}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p>
            <span className="drink-data">instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </CocktailWrapper>
  );
}

export default Cocktail;
