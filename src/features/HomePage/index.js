import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomePage from './page/HomePage';
import EditPostPage from './page/EditPostPage';
import NotFound from "../../components/NotFoundPage"



Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  // console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={HomePage} />

      <Route path={`${match.url}/:postUid`} component={EditPostPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;