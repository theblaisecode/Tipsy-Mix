import { useLoaderData } from "react-router-dom";
import axios from "axios";
import HomeWrapper from "./Landing";
import CocktailList from "../../components/CocktailList/CocktailList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => ({
  queryKey: ["search", searchTerm || "all"],
  queryFn: async () => {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return response.data.drinks;
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

function Landing() {
  const { searchTerm } = useLoaderData();
  const {
    data: drinks,
    isLoading,
    isError,
  } = useQuery(searchCocktailsQuery(searchTerm));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching cocktails</div>;
  }

  return (
    <HomeWrapper>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </HomeWrapper>
  );
}

export default Landing;
