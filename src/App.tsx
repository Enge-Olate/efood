import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle } from "./globalStyle";
import Paths from "./pages/routes";
import { Provider } from "react-redux";
import { store } from "./store";
import CartFood from "./components/CartFood";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootGlobalStyle />
        <Paths />
        <CartFood/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
