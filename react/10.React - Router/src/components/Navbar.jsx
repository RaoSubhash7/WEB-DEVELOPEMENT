import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          My Website
        </h1>

        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-yellow-400       ">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;