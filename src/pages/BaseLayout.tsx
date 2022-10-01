import { Outlet } from "react-router-dom";

const MainLayoutPage = () => {
  console.log("MainLayout");
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default MainLayoutPage;
