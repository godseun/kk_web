import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import MykiikeyRoutes from "routes/MykiikeyRoutes";
import AccountRoutes from "routes/AccountRoutes";
import OrderRoutes from "routes/OrderRoutes";
import MainRoutes from "routes/MainRoutes";
import BaseLayout from "pages/BaseLayout";

const AppRoutes = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  console.log("app routes" + isMobile);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<div>Wellcome</div>} />
        <Route element={<BaseLayout />}>
          <Route path="main/*" element={<MainRoutes />} />
          <Route path="order/*" element={<OrderRoutes />} />
          <Route path="mykiikey/*" element={<MykiikeyRoutes />} />
          <Route path="account/*" element={<AccountRoutes />} />
        </Route>
        <Route path="test" element={<div>hello test</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
