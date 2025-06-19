import React from "react";
import { useErrorBoundary } from "use-error-boundary";

export default function ErrorBoundaryWrapper({ children }) {
  const { ErrorBoundary, error, errorInfo } = useErrorBoundary();

  if (error) {
    return (
      <details style={{ whiteSpace: "pre-wrap" }}>
        {error.toString()}
        <br />
        {errorInfo?.componentStack}
      </details>
    );
  }

  return <ErrorBoundary>{children}</ErrorBoundary>;
}
