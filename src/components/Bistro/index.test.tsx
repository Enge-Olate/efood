/* *
* @vitest-environment jsdom
*/
import { render, screen } from "@testing-library/react"
import { BrowserRouter, Link } from "react-router-dom"
import type { ReactElement } from "react";
import { describe, expect, test } from "vitest";
import Button from "../Button";

const renderRouter = (ui: ReactElement)=>{
    return render(ui, {wrapper: BrowserRouter});
};
describe("Componente Botão", ()=>{
    test("Deve levar a rota perfil", ()=>{
        renderRouter(<Link to={"/perfil"}>
            <Button title="Saiba mais"></Button>
        </Link>)
        const buttonElement = screen.getByText(/Saiba mais/i);
        expect(buttonElement.closest('a'));
    })
})