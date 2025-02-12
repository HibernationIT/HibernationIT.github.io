import React, { createContext, useContext, useLayoutEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

interface ThemeType {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
}

export const themeContext = createContext<ThemeType>({
  theme: "light",
  setTheme: (value) => {},
});

export const useTheme = () => {
  return useContext(themeContext);
};

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useLayoutEffect(() => {}, []);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <main theme-mode={theme}>{children}</main>
    </themeContext.Provider>
  );
}
