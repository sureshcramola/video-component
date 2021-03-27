import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "../common/ThemeContext"
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import VideoDetail from "../../containers/VideoDetail";
import ChannelPage from "../../containers/ChannelPage";
import PageNotFound from "../PageNotFound";
import "./app.scss";
import "../../styles/base.scss";

const App = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`blocktube-app-${themeContext.theme ? 'dark': 'light'}`}>
      <Header />
      <Sidebar />
      <div className="main-section">
        <Switch>
          <Route
            path="/"
            exact
            component={VideoDetail}
          />
          <Route
            path="/video-detail"
            component={VideoDetail}
          />
          <Route path="/channel" component={ChannelPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
