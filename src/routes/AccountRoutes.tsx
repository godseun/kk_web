import { Navigate, Route, Routes } from "react-router-dom";

import AgreementPage from "pages/account/Agreement";
import IdFindPage from "pages/account/IdFind";
import PwFindPage from "pages/account/PwFind";
import SigninPage from "pages/account/Signin";
import SignupPage from "pages/account/Signup";

const AccountRoutes = () => {
  console.log("Account");
  return (
    <section>
      <Routes>
        <Route path="" element={<Navigate to={"signin"} />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="agreement" element={<AgreementPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="idFind" element={<IdFindPage />} />
        <Route path="pwFind" element={<PwFindPage />} />
      </Routes>
    </section>
  );
};

export default AccountRoutes;
