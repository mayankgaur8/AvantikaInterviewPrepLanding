import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProContext = createContext(null);

export function ProProvider({ children }) {
  const [isPro, setIsPro] = useState(() => localStorage.getItem("isPro") === "true");

  // persist between refresh
  useEffect(() => {
    const saved = localStorage.getItem("isPro") === "true";
    setIsPro(saved);
  }, []);

  const setProUser = (v) => {
  setIsPro(v);
  localStorage.setItem("isPro", v ? "true" : "false");
};

  const value = useMemo(() => {
    return {
      isPro,
      upgradeToPro: () => {
        setIsPro(true);
        localStorage.setItem("isPro", "true");
      },
      downgradeToFree: () => {
        setIsPro(false);
        localStorage.setItem("isPro", "false");
      },
    };
  }, [isPro]);

  return <ProContext.Provider value={value}>{children}</ProContext.Provider>;
}

export function usePro() {
  const ctx = useContext(ProContext);
  if (!ctx) throw new Error("usePro must be used inside ProProvider");
  return ctx;
}
