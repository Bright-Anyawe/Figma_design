

import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardPresentation } from "../Components/Layers/CardPresentation";
import { expect } from "vitest";

describe("Card presentation component", () => {
  it("should render card button", () => {
    render(<CardPresentation />);

    const cardButton = screen.getByRole("button", {
      name: /Open an account/i,
    });
    expect(cardButton).toBeInTheDocument();
  });

  it("should call handle click function when the button is clicked", () => {
    const handleClick = vi.fn();
    render(<CardPresentation handleClick={handleClick} />);

    const accountButtcardButtonon = screen.getByRole("button", {
      name: /Open an account/i,
    });

    fireEvent.click(accountButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
