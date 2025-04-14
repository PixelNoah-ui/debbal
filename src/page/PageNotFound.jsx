import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700  text-white px-6 py-3 rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
