import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="bg-primary w-2/6 md:w-1/4">
      <div className="flex flex-col h-screen px-6 py-5 border-b justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5">
            <Link
              to="Evenement"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Evenement")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4 ml-3">Evenement</p>
            </Link>
            <Link
              to="/"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
            >
              <p className="text-base leading-4 ml-3">Acceuil</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
