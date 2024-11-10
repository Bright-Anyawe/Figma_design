

import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardPresentation } from "../Components/Layers/CardPresentation";
import { expect } from "vitest";

describe("Card ", () => {
  it("should render account button", () => {
    render(<CardPresentation />);

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

    fireEvent.click(accountButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
