import { BrowserRouter } from "react-router-dom"
import { RootGlobalStyle } from "./globalStyle"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <RootGlobalStyle/>
      <Header/>
    </BrowserRouter>
  )
}

export default App
