import React from "react";
import PropTypes from "prop-types";

function ErrorFallback({ error }) {
  
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.func.isRequired,
}
export default ErrorFallback;