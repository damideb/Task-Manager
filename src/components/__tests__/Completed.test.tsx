import { render, screen } from "@testing-library/react";
import Completed from "../TaskList/Completed";

jest.mock("../SingleTask", () => () => (
  <div data-testid="single-task">SingleTask</div>
));

import * as Context from "../../Store/ContextProvider";

const mockContext = {
  tasks: [{ id: "1", title: "Task four", status: "Pending" }],
  pendingTasks: [{ id: "1", title: "Task four", status: "Pending" }],
  setTasks: jest.fn(),
  addTask: jest.fn(),
  totalTasks: [{ id: "1", title: "Task four", status: "Pending" }],
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
};
describe("Completed Component", () => {
  it("displays message when no completed tasks exist", () => {
    
    jest
      .spyOn(Context, "useAppContext")
      .mockReturnValue({ ...mockContext, completedTasks: [] });

    render(<Completed />);
    expect(screen.getByText(/you have no completed task/i)).toBeInTheDocument();
  });

  it("renders a list of completed tasks", () => {
    jest.spyOn(Context, "useAppContext").mockReturnValue({
      ...mockContext,
      completedTasks: [
        { id: "1", title: "Task One", status: "completed" },
        { id: "2", title: "Task Two", status: "completed" },
      ],
    });

    render(<Completed />);
    const taskItems = screen.getAllByTestId("single-task");
    expect(taskItems).toHaveLength(2);
  });
});
