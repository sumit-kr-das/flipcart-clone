import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/itemDetail/DetailView";
import {Box} from '@material-ui/core';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <Router>
          <Header/>
          <Box style={{marginTop:55}}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/cart" component={Cart} exact />
              <Route path="/product/:id" component={DetailView} />
            </Switch>
          </Box>
        </Router>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
