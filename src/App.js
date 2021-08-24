import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
          </Switch>
        </Router>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
