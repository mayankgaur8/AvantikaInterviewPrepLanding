import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { usePro } from "./ProContext";

export default function ProRoute({ children }) {
  const { isPro } = usePro();
  const location = useLocation();

  if (!isPro) {
    return <Navigate to="/pricing" state={{ from: location.pathname }} replace />;
  }

  return children;
}
