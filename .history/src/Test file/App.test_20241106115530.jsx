import { render,describe,it, screen } from '@testing-library/react';
import App from './App';
import { Header } from '../Components/Layers/Header_Responsive';


describe('App', () => {
it("should render the app", () => {
  render(
      <App />
  );

  const headerContentsContainer = screen.getByRole('region', {name: /header contents container/i})
exp
});
 
});


describe("Header Component", () => {
  it("should render the logo and heading", () => {
    render(<Header />);
  });


});