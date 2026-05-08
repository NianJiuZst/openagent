import React, {createContext, useCallback, useContext, useEffect, useState} from "react";

const ThemeProviderContext = createContext({
  theme: "light",
  setTheme: () => null,
  resolvedTheme: "light",
});

export function ThemeProvider({children, defaultTheme = "system", storageKey = "ui-theme"}) {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const getResolvedTheme = useCallback((t) => {
    if (t === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return t;
  }, []);

  const [resolvedTheme, setResolvedTheme] = useState(() => getResolvedTheme(theme));

  useEffect(() => {
    const resolved = getResolvedTheme(theme);
    setResolvedTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, [theme, getResolvedTheme]);

  useEffect(() => {
    if (theme !== "system") {return;}

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const resolved = mq.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      document.documentElement.setAttribute("data-theme", resolved);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback(
    (nextTheme) => {
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        // storage unavailable
      }
      setThemeState(nextTheme);
    },
    [storageKey]
  );

  return (
    <ThemeProviderContext.Provider value={{theme, setTheme, resolvedTheme}}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
