import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter/Newsletter.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient),
        },
        {
          path: "cocktail/:id",
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader(queryClient),
          element: <Cocktail />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
          action: newsletterAction,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: "/Tipsy-Mix" }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
