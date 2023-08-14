import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach} from "@jest/globals";
import { screen, render, fireEvent } from "@testing-library/react";
import { Formulario } from "./index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { jest } from "@jest/globals";


describe("<Formulario/> component", () => {
    beforeEach(() => {
        render(<MemoryRouter><Formulario testDisplay={true}></Formulario></MemoryRouter>);
    });

    it("should render correctly", () => {
        const section = screen.getByRole("section");
        expect(section).toBeInTheDocument();
    });

    it("should have inputs working as expected", async () => {
        const inputName = screen.getByPlaceholderText("Digite o nome");
        const inputEmail = screen.getByPlaceholderText("Digite o e-mail");
        const inputAge = screen.getByPlaceholderText("Digite a idade");

        // input name
        await userEvent.type(inputName, "{backspace}{backspace}{backspace}{backspace}{backspace}");
        await userEvent.type(inputName, "Lucas");
        expect(inputName).toHaveValue("Lucas");
        // input email
        await userEvent.type(inputEmail, "Lucas@email.com");
        expect(inputEmail).toHaveValue("Lucas@email.com");
        // input age
        await userEvent.type(inputAge, "{backspace}");
        await userEvent.type(inputAge, "13");
        expect(inputAge).toHaveValue(13);
    });

    it("should change title correctly after form submit", async () => {
        const inputName = screen.getByPlaceholderText("Digite o nome");
        await userEvent.type(inputName, "{backspace}{backspace}{backspace}{backspace}{backspace}");
        await userEvent.type(inputName, "Lucas");


        const form = screen.getByRole("form");
        fireEvent.submit(form);

        const formTitle = screen.getByTestId("FormTitle");
        expect(formTitle).toHaveTextContent("Lucas");
    });
});   