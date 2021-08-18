import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChangePlan from "./components/ChangePlan";
import Home from "./components/Home";
import AddProductFeed from "./components/AddProductFeed";
import EditSettings from "./components/EditSettings";
import UpdateProductFeeds from "./components/UpdateProductFeeds";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/change-plan" exact component={ChangePlan} />
          <Route path="/add-product-feed" exact component={AddProductFeed} />
          <Route path="/edit-settings" exact component={EditSettings} />
          <Route
            path="/update-product-feeds"
            exact
            component={UpdateProductFeeds}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
