import { Component } from "react";
import ErrorState from "./ErrorState.jsx";

class AppErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Something went wrong"
          message="An unexpected error stopped this page from loading. Reload the app to try again."
          retryLabel="Reload app"
          onRetry={() => window.location.reload()}
        />
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;