import { render, screen } from "@testing-library/react";
import Selector from "../src/components/Selector";

it("should render buttons", () => {
    render(<Selector />);
    const lengthButton = screen.getByText(/length/i);
    const weightButton = screen.getByText(/weight/i);
    const volumeButton = screen.getByText(/volume/i);
    expect(lengthButton).toBeDefined();
    expect(weightButton).toBeDefined();
    expect(volumeButton).toBeDefined();
})