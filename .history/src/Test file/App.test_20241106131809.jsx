import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HeroScreen } from "../Components/Layers/HeroScreen";
import App from "../App";
import { Header } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("App", () => {
  it("should render the header contents container", () => {
    render(<App />);
    const headerContentsContainer = screen.getByTestId("header-contents");

        expect(headerContentsContainer).toBeInTheDocument();
//     expect(headerContentsContainer).toBeInTheDocument();
  });
  it("should render the hero section contents container", () => {
    render(<App />);
    const HeroContentsContainer = screen.getByTestId("hero-contents");

    expect(headerContentsContainer).toBeInTheDocument();
    //     expect(headerContentsContainer).toBeInTheDocument();
  });
});

// describe("Header Component", () => {
//   it("should render the logo and heading", () => {
//     render(<Header />);
//   });

// });
