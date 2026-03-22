import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle } from "./globalStyle";
import Paths from "./pages/routes";
import { Provider } from "react-redux";
import { store } from "./store";
import CheckoutSidebar from "./components/CheckoutSidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootGlobalStyle />
        <Paths />
        <CheckoutSidebar/>
      </BrowserRouter>
      <Toaster/>
    </Provider>
  );
}

export default App;
