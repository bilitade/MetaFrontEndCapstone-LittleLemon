import { render, fireEvent, screen } from "@testing-library/react";
import Booking from "./Components/Booking";

test("updates selected date on date input change", () => {
  // Render the Booking component
  render(<Booking />);

  // Get the date input element
  const dateInput = screen.getByTestId("res-date");

  // Set the input value by simulating a change event
  fireEvent.change(dateInput, { target: { value: "2025-02-25" } });

  // Assert that the input value has been updated
  expect(dateInput).toHaveValue("2025-02-25");
});
