import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it, jest } from "@jest/globals";
import { screen, render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("<Button/> component", () => {
    it("should render correctly", () => {
        render(<Button data-testid="buttonTest">Click me</Button>);
        const button = screen.getByTestId("buttonTest");

        expect(button).toBeInTheDocument();
    });

    it("should be able to call a onclick function", () => {
        const onClickFunction = jest.fn();
        render(<Button data-testid="buttonTest" onClick={onClickFunction}>Click me</Button>);
        
        const button = screen.getByTestId("buttonTest");
        fireEvent.click(button);

        expect(onClickFunction).toHaveBeenCalledTimes(1);
    });
});