

import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardPresentation } from "../Components/Layers/CardPresentation";
import { expect } from "vitest";
import { ProvideContext } from "../App";

describe("Card presentation component", () => {
  it("should render card button", () => {
    render(
       <ProvideContext.Provider value={{ isBlack: false, setIsBlack: vi.fn() }}>
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
    render(
      <ProvideContext.Provider value={{ isBlack: false, setIsBlack: vi.fn() }}>
        <CardPresentation cardText="Test Card" handleClick={handleClick} />
      </ProvideContext.Provider>
    );

    const cardButton = screen.getByRole("button", {
      name: /Learn more/i,
    });

    fireEvent.click(cardButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
