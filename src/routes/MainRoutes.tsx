import { Route, Routes } from "react-router-dom";

import Main from "pages/main/Main";
import AboutPage from "pages/main/About";

const MainRoutes = () => {
  console.log("main route");
  return (
    <section>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </section>
  );
};

export default MainRoutes;
