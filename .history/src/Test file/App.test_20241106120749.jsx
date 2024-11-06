import { describe, it } from "vitest";
import { render,screen } from "@testing-library/react";
import App from "../App";
import { Header } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("App", () => {
  it("should render the header contents container", () => {
    render(<App />);

//     const headerContentsContainer = screen.getByRole("region", {
//       name: /header contents container/i,
//     });
const headerContentsContainer = screen.getByRole("region");

    expect(headerContentsContainer).toBeInTheDocument();
  });
});

// describe("Header Component", () => {
//   it("should render the logo and heading", () => {
//     render(<Header />);
//   });

// });