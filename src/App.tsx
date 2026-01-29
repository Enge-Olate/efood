import { BrowserRouter } from "react-router-dom"
import { RootGlobalStyle } from "./globalStyle"
import Paths from "./components/pages/routes"

function App() {

  return (
    <BrowserRouter>
      <RootGlobalStyle/>
      <Paths/>
    </BrowserRouter>
  )
}

export default App
