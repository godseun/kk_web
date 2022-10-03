import { Link, Outlet } from "react-router-dom";

const BaseLayoutPage = () => {
  console.log("MainLayout");
  return (
    <div>
      <header>header</header>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to={"main"}>main</Link>
        <Link to={"main/about"}>about</Link>
        <Link to={"order"}>order</Link>
        <Link to={"account"}>account</Link>
        <Link to={"mykiikey"}>mykiikey</Link>
      </nav>
      <br />
      <Outlet />
      <br />
      <footer>footer</footer>
    </div>
  );
};

export default BaseLayoutPage;
