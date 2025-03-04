

import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardPresentation } from "../Components/Layers/CardPresentation";
import { expect } from "vitest";
import Prov

describe("Card presentation component", () => {
  it("should render card button", () => {
    render(
      <ProvideContext.Provider value={{ isBlack: true }}>
        {" "}
        {/* Provide necessary context values */}
        <CardPresentation cardText="Test Card" handleClick={() => {}} />
      </ProvideContext.Provider>
    );

    const cardButton = screen.getByRole("button", {
      name: /Open an account/i,
    });
    expect(cardButton).toBeInTheDocument();
  });

  it("should call handle click function when the button is clicked", () => {
    const handleClick = vi.fn();
    render(<CardPresentation handleClick={handleClick} />);

    const cardButton = screen.getByRole("button", {
      name: /Open an account/i,
    });

    fireEvent.click(cardButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
