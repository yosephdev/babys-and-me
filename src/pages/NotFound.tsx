import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-baby-pink mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Hoppsan! Sidan kunde inte hittas</p>
        <p className="text-gray-600 mb-8">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <Link
          to="/"
          className="inline-block bg-baby-pink text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
