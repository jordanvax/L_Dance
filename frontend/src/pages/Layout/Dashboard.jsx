import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

function Dashboard() {
  return (
    <div className="flex">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
