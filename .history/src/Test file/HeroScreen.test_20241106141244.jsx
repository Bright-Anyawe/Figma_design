
import { describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroScreen } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("Hero Component", () => {
  it("should render account button", () => {
    render(<Header />);

    const logoIcon = screen.getByAltText("logo");
    expect(logoIcon).toBeInTheDocument();
    expect(logoIcon).toHaveAttribute(
      "src",
      "public/Figma Img/Logo/Group 132.png"
    );

    const headingLogo = screen.getByText(/Parap/i);
    expect(headingLogo).toBeInTheDocument();
  });

});