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

  The error message you're encountering could be due to a few potential issues related to `screen.getByAltText()` from React Testing Library. Here's a breakdown of possible problems and how to resolve them:

### Possible Issues and Solutions

1. **Ensure Proper Setup of Testing Library**
   - Double-check that you've correctly imported `@testing-library/jest-dom` in your setup file. This ensures you have access to matchers like `toBeInTheDocument` and `toHaveAttribute`.
   - Your setup file (`setup.js`) should include:
     ```javascript
     import '@testing-library/jest-dom';
     ```

2. **Check the Correctness of `screen.getByAltText` Usage**
   - `screen.getByAltText()` queries elements by the `alt` attribute. Ensure that the `alt` text you're providing, `"logo"`, matches exactly with the `alt` attribute in your component.
   - Example of a component that should work:
     ```jsx
     <img src="path/to/logo.png" alt="logo" />
     ```

3. **Verify the Presence of the Element**
   - Make sure the element with the `alt` attribute of `"logo"` is indeed rendered within your `Header` component. If the component conditionally renders or has an error, the element might not be appearing.

### Steps to Troubleshoot
1. **Confirm the `alt` Attribute Value**
   - Check the component rendering the `img` tag and make sure the `alt` text is exactly `"logo"`. It is case-sensitive and must match.
   - Example:
     ```jsx
     <img src="logo.png" alt="logo" /> // This should match "logo"
     ```

2. **Check for Conditional Rendering**
   - If the image is conditionally rendered, ensure the conditions are met when you render the component in your test.
   - Example:
     ```jsx
     {showLogo && <img src="logo.png" alt="logo" />}
     ```

3. **Debug the Test File**
   - Add a `console.log` to ensure the component is rendering as expected:
     ```javascript
     render(<Header />);
     console.log(screen.debug()); // This will print the DOM to help debug
     ```

### Revised Test Example
```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header'; // Adjust the import path as needed

test('renders the logo icon', () => {
  render(<Header />);
  
  const logoIcon = screen.getByAltText('logo'); // Make sure "logo" matches exactly
  expect(logoIcon).toBeInTheDocument();
  expect(logoIcon).toHaveAttribute('src', 'path/to/logo.png'); // Ensure the src matches
});
```

### Additional Notes
- **No Tests Found**: If your test suite mentions "no tests," make sure your test function is correctly defined and named.
- **Test Syntax**: Ensure your test functions are enclosed within `test()` or `it()` blocks.

Let me know if this resolves your issue or if you need further assistance!

  const headingLogo = screen.getByText(/Parap/i)
  expect(headingLogo).toBeInTheDocument()
});
