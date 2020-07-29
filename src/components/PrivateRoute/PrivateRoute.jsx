import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import {AppUrls} from "../../index";
import {connect} from "react-redux";
import {isUserAuth} from "../../reducers/user/selectors";

const PrivateRoute = (props) => {
  const {render, path, exact = false, userAuth} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          userAuth ? render() : <Redirect to={AppUrls.AUTH} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  userAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  userAuth: isUserAuth(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(React.memo(PrivateRoute));
