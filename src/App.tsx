import { BrowserRouter } from "react-router-dom"
import { RootGlobalStyle } from "./globalStyle"
import Header from "./components/Header"
import Paths from "./components/pages/routes"

function App() {

  return (
    <BrowserRouter>
      <RootGlobalStyle/>
      <Header/>
      <Paths/>
    </BrowserRouter>
  )
}

export default App
