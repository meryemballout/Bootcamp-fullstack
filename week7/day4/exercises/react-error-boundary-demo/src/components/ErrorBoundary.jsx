import { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      console.error("Global error caught:", event.error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return <h2 className="text-danger">Something went wrong.</h2>;
  }

  return children;
};

export default ErrorBoundary;
