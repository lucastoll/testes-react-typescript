import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach} from "@jest/globals";
import { screen, render } from "@testing-library/react";
import { Header } from "./index";
import { MemoryRouter } from "react-router-dom";

describe("<Header/> component", () => {
    beforeEach(() => {
        render(<MemoryRouter><Header testDisplay={true}></Header></MemoryRouter>);
    });

    it("should render correctly", () => {
        const header = screen.getByTestId("wrapper");
        expect(header).toBeInTheDocument();
    });

    it("should render 7 link items in the </ul>", () => {
        const ul = screen.getByRole("list");
        expect(ul.childNodes).toHaveLength(7);
    });

    it("the links should have correct paths to the sections", () => {
        const ulElement = screen.getByRole("list");
        // Use `ulElement.querySelectorAll` to select only the items inside the ul tag, since there is more links in this component that are not in the ul
        const links = ulElement.querySelectorAll("a"); 
        expect(links[0]).toHaveAttribute("href", "/#secao1");
        expect(links[1]).toHaveAttribute("href", "/#secao2");
        expect(links[2]).toHaveAttribute("href", "/#secao3");
        expect(links[3]).toHaveAttribute("href", "/#secao4");
        expect(links[4]).toHaveAttribute("href", "/#secao5");
        expect(links[5]).toHaveAttribute("href", "/#secao6");
        expect(links[6]).toHaveAttribute("href", "/#secao7");
    });

    it("should render the logo correctly", () => {
        const logo = screen.getByAltText("Sonic The Hedgehog");
        expect(logo).toBeInTheDocument();
    });
});   