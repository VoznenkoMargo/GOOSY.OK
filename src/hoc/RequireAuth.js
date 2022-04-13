/* eslint-disable no-else-return  */
/* eslint-disable react/forbid-prop-types  */
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { getFromLS } from "../utils/localStorage";

function RequireAuth({ component: Component, ...rest }) {

    return(
        <Route
          {...rest}
          render={(props) => {
            if (getFromLS("authToken")) {
              return <Component {...props} />;
            } else {
              return (
                <Redirect
                  to={{ pathname: "/", state: {from: props.location}}} />
              ); 
            }
          }}
        />
      );
}

RequireAuth.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.object,
};

RequireAuth.defaultProps = {
  component: null,
  location: null,
};

export default React.memo(RequireAuth);
