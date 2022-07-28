import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("<Icon />", () => {
  test("01. Renders the Icon component", () => {
    render(<Icon ariaLabel="moon icon" className="fa-solid fa-moon" />);

    const icon = screen.getByLabelText("moon icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-label", "moon icon");
    expect(icon).toHaveClass("fa-solid fa-moon");
    expect(icon).not.toHaveClass("bad-className");
  });
  test("02. Icon component inherits id passed as a prop", () => {
    render(
      <Icon ariaLabel="moon icon" className="fa-solid fa-moon" id="moon-icon" />
    );

    const icon = screen.getByLabelText("moon icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("id", "moon-icon");
    expect(icon).not.toHaveAttribute("id", "bad-id");
  });
  test("03. Icon component inherits title passed as a prop", () => {
    render(
      <Icon
        ariaLabel="moon icon"
        className="fa-solid fa-moon"
        title="moon icon"
      />
    );

    const icon = screen.getByLabelText("moon icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("title", "moon icon");
    expect(icon).not.toHaveAttribute("title", "bad title");
  });
});
