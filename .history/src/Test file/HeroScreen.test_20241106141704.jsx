
import { describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroScreen } from "../Components/Layers/Header_Responsive";
import { expect } from "vitest";

describe("Hero Component", () => {
  it("should render account button", () => {
    render(<HeroScreen />);

    const accountButton = screen.getByRole('button', { name: /Open an account/i });
    expect(accountButton).toBeInTheDocument();
   
  });

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

});
