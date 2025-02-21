import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold dark:text-white">Next Step ♾️</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-all"
      >
        {darkMode ? (
          <FiSun className="text-yellow-500 text-xl" />
        ) : (
          <FiMoon className="text-gray-700 dark:text-gray-200 text-xl" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
