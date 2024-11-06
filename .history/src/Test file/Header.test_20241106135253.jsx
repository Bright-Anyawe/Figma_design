import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("Header Component", () => {
  it("should render the logo and heading", () => {
    render(<Header />);
  });

  const logoIcon = screen.getByAltText("logo");
  expect(logoIcon).toBeInTheDocument();
  expect(logoIcon).toHaveAttribute(
    "src",
    "public/Figma Img/Logo/Group 132.png"
  );

  console.log(screen.debug())

  const headingLogo = screen.getByText(/Parap/i)
  expect(headingLogo).toBeInTheDocument()
});
