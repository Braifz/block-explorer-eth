import { LIGHT_THEME, DARK_THEME } from "../actions/theme";

export const initialState = {
  darkMode: false,
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case LIGHT_THEME: {
      return { darkMode: false };
    }

    case DARK_THEME: {
      return { darkMode: true };
    }
    default: {
      return state;
    }
  }
};
