import CocktailCard from "../CocktailCard/CocktailCard.jsx";
import CocktailListWrapper from "./CocktailList";

function CocktailList({ drinks }) {
  console.log(drinks)
  if (!drinks || !Array.isArray(drinks)) {
    return (
      <CocktailListWrapper>
        <h4>No matching cocktails found...</h4>
      </CocktailListWrapper>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlchoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlchoholic,
      glass: strGlass,
    };
  });

  return (
    <CocktailListWrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </CocktailListWrapper>
  );
}

export default CocktailList;
