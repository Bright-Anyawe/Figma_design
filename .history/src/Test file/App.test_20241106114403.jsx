import { render,describe,it, screen } from '@testing-library/react';



import App from './App';

describe('App', () => {
it("should render the correct heading", () => {
  render(
//     <MemoryRouter>
      <App />
//     </MemoryRouter>
  );

});
 
});