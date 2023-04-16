import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Header = () => {
  const { lightTheme, darkTheme, state } = useContext(ThemeContext);

  const onClick = () => {
    state.darkMode ? lightTheme() : darkTheme();
  };

  return (
    <header
      className={`${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl text-center underline italic font-bold m-4">
        Block Explorer ETH
      </h1>
      <button onClick={onClick}>Toggle theme</button>
    </header>
  );
};

export default Header;
