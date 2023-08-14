import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach} from "@jest/globals";
import { screen, render, act } from "@testing-library/react";
import { UseEffect } from "./index";
import { MemoryRouter } from "react-router-dom";

describe("<UseEffect/> component", () => {
    beforeEach(() => {
        render(<MemoryRouter><UseEffect testDisplay={true}></UseEffect></MemoryRouter>);
    });

    it("should render correctly", () => {
        const section = screen.getByRole("section");
        expect(section).toBeInTheDocument();
    });

     it("should render mobile and tablet image correctly", () => {
        act(() => {
            // Simula uma mudança no tamanho da tela para um dispositivo móvel
          window.innerWidth = 320; 
          window.dispatchEvent(new Event("resize"));  
        });

        const celular = screen.getByAltText("Celular");
        expect(celular).toBeInTheDocument();

        // Testa a imagem do tablet

        act(() => {
            // Simula uma mudança no tamanho da tela para um dispositivo tablet
          window.innerWidth = 768; 
          window.dispatchEvent(new Event("resize"));  
        });

        const tablet = screen.getByAltText("Tablet");
        expect(tablet).toBeInTheDocument();
     });
});   