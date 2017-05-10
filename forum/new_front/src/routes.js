import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContainer from './containers/MainContainer/MainContainer';
import AlbumContainer from './containers/AlbumContainer/AlbumContainer';
import BoardContainer from './containers/BoardContainer/BoardContainer';
import ClaimContainer from './containers/ClaimContainer/ClaimContainer';

export default
  <Router>
    <div>
     
      <Route exact path="/album" component={AlbumContainer} />
			<Route exact path="/board" component={BoardContainer} />
			<Route exact path="/claim" component={ClaimContainer} />
      <Route exact path="/" component={MainContainer} />
    </div>
  </Router>