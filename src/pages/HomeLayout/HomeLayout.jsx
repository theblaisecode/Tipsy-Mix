import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LayoutWrapper from "./HomeLayout.js";

function HomeLayout() {
  const fastNavigation = useNavigation();

  const isPageLoading = fastNavigation.state === "loading";

  const value = "some value";

  return (
    <>
      <Navbar />
      <LayoutWrapper>
        {isPageLoading ? (
          <div className="loadingSpinner">
            <div className="loading"></div>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </LayoutWrapper>
    </>
  );
}

export default HomeLayout;
