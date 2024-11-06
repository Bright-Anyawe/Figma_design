import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

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
});

// describe("Header Component", () => {
//   it("should render the logo and heading", () => {
//     render(<Header />);
//   });

// });
