import { render, screen } from "@testing-library/react";
import TotalTasks from "../cards/TotalTasks";

test("value should be equal", () => {
  render(<TotalTasks totalTasks={10} />);

  const value = screen.getByTestId("total-number");
  expect(value.textContent).toBe('10');
});
