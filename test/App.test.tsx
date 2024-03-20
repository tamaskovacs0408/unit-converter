import { render, screen } from "@testing-library/react";
import App from "../src/App";

it("should have title", () => {
    render(<App />);
    const mainTitle = screen.queryByText(/unit converter/i);
    expect(mainTitle).toBeDefined();
})