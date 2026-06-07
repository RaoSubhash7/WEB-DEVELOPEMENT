import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) {
      str += "0123456789";
    }

    if (isCharAllowed) {
      str += "~`!@#$%^&*()_+-=|\\/?.,<>;:'\"[]{}";
    }

    for (let i = 0; i < length; i++) {
      let rand = Math.floor(Math.random() * str.length);
      pass += str.charAt(rand);
    }

    setPassword(pass);
  }, [length, isCharAllowed, isNumberAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharAllowed, isNumberAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-500 bg-gray-100 px-4 py-4">
      <h1 className="text-xl text-center text-black my-3">
        Password Generator
      </h1>

      <div className="flex rounded-xl shadow-md overflow-hidden mb-4">
        <input
          className="outline-none w-full py-2 px-3"
          type="text"
          value={password}
          readOnly
          placeholder="Generated Password"
          ref={passwordRef}
        />

        <button
          onClick={copyPassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        {/* Length */}
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numberInput"
            checked={isNumberAllowed}
            onChange={(e) => setIsNumberAllowed(e.target.checked)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        {/* Symbols */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="charInput"
            checked={isCharAllowed}
            onChange={(e) => setIsCharAllowed(e.target.checked)}
          />
          <label htmlFor="charInput">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;