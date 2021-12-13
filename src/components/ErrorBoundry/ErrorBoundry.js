import React, { Component } from 'react';
import { any } from 'prop-types';
import ErrorIndicator from './ErrorIndicator';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) return <ErrorIndicator error={error} errorInfo={errorInfo} />;
    return children;
  }
}

ErrorBoundry.propTypes = {
  children: any,
};

export default ErrorBoundry;
