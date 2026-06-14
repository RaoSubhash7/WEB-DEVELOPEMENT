import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Card from "./Components/Card";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
    <div
      className={`min-h-screen flex justify-center items-center ${
        darkMode
          ? "bg-black"
          : "bg-gray-100"
      }`}
    >
      <Card />
    </div>

    <h3 className="bg-red-200`">Hello</h3>
    </>
  );
}

export default App;