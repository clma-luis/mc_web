import React, { useState, useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hasError]);

  const getDerivedStateFromError = (error: Error) => {
    error;
    setHasError(true);
  };

  const componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  };

  if (hasError) {
    return (
      <main className="bg-background dark:bg-background">
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-background rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-background rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-background rounded-full animate-bounce"></div>
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundaryHandler onError={getDerivedStateFromError} onCatch={componentDidCatch}>
      {children}
    </ErrorBoundaryHandler>
  );
};

interface ErrorBoundaryHandlerProps {
  children: ReactNode;
  onError: (error: Error) => void;
  onCatch: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundaryHandler extends React.Component<ErrorBoundaryHandlerProps> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onCatch(error, errorInfo);
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
