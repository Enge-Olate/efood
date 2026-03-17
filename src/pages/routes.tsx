import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Perfil from "./perfil";
import Checkout from "./checkout";

export default function Paths(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/restaurantes/:id" element={<Perfil />}/>
            <Route path="/ckeckout" element={<Checkout />}/>
        </Routes>
    );
}