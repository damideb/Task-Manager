import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../reusables/Form";

describe("Form component", () => {
  const handleAddTask = jest.fn((e) => e.preventDefault());
  const handleChange = jest.fn();
  const setOpenModal = jest.fn();
  const singleTask = { title: "", status: "Pending" };

  beforeEach(() => {
    render(
      <Form
        handleAddTask={handleAddTask}
        handleChange={handleChange}
        singleTask={singleTask}
        setOpenModal={setOpenModal}
      />
    );
  });

  

  test("calls handleChange on input and select change", () => {
    fireEvent.change(screen.getByPlaceholderText(/enter task title/i), {
      target: { value: "Buy groceries", name: "title" },
    });
    fireEvent.change(screen.getByLabelText(/task status/i), {
      target: { value: "Completed", name: "status" },
    });

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test("calls handleAddTask on form submit", () => {
    fireEvent.submit(
      screen.getByRole("form", { hidden: true }) ||
        screen.getByRole("button", { name: /add task/i }).closest("form")!
    );
    expect(handleAddTask).toHaveBeenCalled();
  });

  test("calls setOpenModal(false) when cancel is clicked", () => {
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(setOpenModal).toHaveBeenCalledWith(false);
  });
});
