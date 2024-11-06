import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HeroScreen } from "../Components/Layers/HeroScreen";
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

  const headingLogo = screen.getByText(/Parap/i)
  expect(head)
});
