import React, { Component } from 'react';

export class ReactErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.FallbackComponent}</>;
    }

    return <>{this.props.children}</>;
  }
}
