import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach} from "@jest/globals";
import { screen, render, fireEvent } from "@testing-library/react";
import { StatesProps } from "./index";
import { MemoryRouter } from "react-router-dom";

describe("<Header/> component", () => {
    beforeEach(() => {
        render(<MemoryRouter><StatesProps testDisplay={true}></StatesProps></MemoryRouter>);
    });

    it("should render correctly", () => {
        const section = screen.getByRole("section");
        expect(section).toBeInTheDocument();
    });

    it("should rotate sonica after clicking the button", () => {
        const button = screen.getByRole("button");
        const info = screen.getByTestId("info");

        fireEvent.click(button);
        expect(info).toHaveTextContent("1");
        fireEvent.click(button);
        expect(info).toHaveTextContent("2");
    });

});   