import { createContext, useReducer } from "react";
import { LIGHT_THEME, DARK_THEME } from "../actions/theme";
import { themeReducer, initialState } from "../reducer/theme";

export const ThemeContext = createContext();
const { Provider } = ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const lightTheme = () => {
    dispatch({ type: LIGHT_THEME });
  };

  const darkTheme = () => {
    dispatch({ type: DARK_THEME });
  };

  return (
    <Provider value={{ state, lightTheme, darkTheme }}>{children}</Provider>
  );
};
