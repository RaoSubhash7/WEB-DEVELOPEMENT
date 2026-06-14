import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Card() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-xl shadow-lg w-80 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-2">
        Theme Card
      </h2>

      <p className="mb-4">
        React Context API Theme Toggle Example
      </p>

   <button
  onClick={() => {
    console.log("Button Clicked");
    toggleTheme();
  }}
  className="px-4 py-2 bg-blue-500 text-white rounded"
>
  Toggle Theme
</button>
    </div>
  );
}

export default Card;