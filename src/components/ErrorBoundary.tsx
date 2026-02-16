import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => this.setState({ hasError: false, error: null, errorInfo: null });

  render() {
    if (this.state.hasError && this.props.fallback) return this.props.fallback;
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
          <div className="max-w-2xl w-full border-2 border-red-200 rounded-xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 font-semibold text-lg mb-2">
              <AlertTriangle className="h-5 w-5" />
              Something went wrong
            </div>
            <p className="text-slate-600 mb-4">An error occurred while loading this page.</p>
            {this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-red-800">{this.state.error.message}</p>
              </div>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 inline-block"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
