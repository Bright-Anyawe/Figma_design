import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroScreen } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("Hero Component", () => {
  it("should render account button", () => {
    render(<HeroScreen />);

    const accountButton = screen.getByRole("button", {
      name: /Open an account/i,
    });
    expect(accountButton).toBeInTheDocument();
  });

  it("should render account button", () => {
    render(<HeroScreen />);

    const accountButton = screen.getByRole("button", {
      name: /Open an account/i,
    });
    expect(accountButton).toBeInTheDocument();
  });

  it("should call handle click function when the button is clicked", () => {
       
       const handleClick = vi.fn();
       render(<HeroScreen handleClick={handleClick} />);

    const accountButton = screen.getByRole("button", {
      name: /Open an account/i,
    });

    fireEvent.click(accountButton)

    expect(accountButton).toBeInTheDocument();
  });
});
