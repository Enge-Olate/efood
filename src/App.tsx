import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle } from "./globalStyle";
import Paths from "./pages/routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootGlobalStyle />
        <Paths />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
