
import { render, screen } from "@testing-library/react";
import App from "./App";

import ContextProvider from './Store/ContextProvider.tsx'

test("renders heading", () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
  expect(screen.getByText(/task dashboard/i)).toBeInTheDocument();
});
