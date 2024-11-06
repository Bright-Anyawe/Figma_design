import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("Header Component", () => {
  it("should render the logo and heading", () => {
    render(<Header />);
    
      const logoIcon = screen.getByAltText("logo");
      expect(logoIcon).toBeInTheDocument();
      expect(logoIcon).toHaveAttribute(
        "src",
        "public/Figma Img/Logo/Group 132.png"
      );
    
      const headingLogo = screen.getByText(/Parap/i)
      expect(headingLogo).toBeInTheDocument()
  });

  it("should render the svg Icon", () => {
    render(<Header />);

    const svgIcon = screen.getByTitle("menu")

    expect(svgIcon).toBeInTheDocument();
    ex
  });
});
