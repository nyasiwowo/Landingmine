import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Terminos from "./pages/terminos";
import Privacidad from "./pages/privacidad";
import { Provider } from "./components/provider";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/terminos" component={Terminos} />
        <Route path="/privacidad" component={Privacidad} />
      </Switch>
    </Provider>
  );
}

export default App;