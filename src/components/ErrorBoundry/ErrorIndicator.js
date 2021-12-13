import React from 'react';
import { any } from 'prop-types';

function ErrorIndicator({ error, errorInfo }) {
  return (
    <div className="error-indicator">
      <div className="error-text_block">
        <p>{error.toString()}</p>
        <p>{errorInfo.componentStack}</p>
      </div>
    </div>
  );
}

ErrorIndicator.propTypes = {
  error: any,
  errorInfo: any,
};

export default ErrorIndicator;
